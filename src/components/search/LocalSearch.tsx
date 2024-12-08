import _ from "lodash";
import React from "react";
import { Image } from "@mantine/core";
import { Search, Label } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";


function exampleReducer(state, action) {
  switch (action.type) {
    case "CLEAN_QUERY":
      return initialState;
    case "START_SEARCH":
      return { ...state, loading: true, value: action.query };
    case "FINISH_SEARCH":
      return { ...state, loading: false, results: action.results };
    case "UPDATE_SELECTION":
      return { ...state, value: action.selection };

    default:
      throw new Error();
  }
}

const initialState = {
  loading: false,
  results: [],
  value: "",
};

const SearchBox = ({ data, navigatePath }) => {
  const [state, dispatch] = React.useReducer(exampleReducer, initialState);
  const { loading, results, value } = state;

  const source = data.map((obj) => ({
    id: obj.id.toString(),
    title: obj.nameRu || obj.band,
    description: obj.title || obj.name,
    src: obj.src || obj.image,
  }));

  const navigate = useNavigate();

  const timeoutRef = React.useRef();

  const resultRenderer = ({ title, src, description }) => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: '30px'
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          {title && <Label horizontal content={title} />}
          {description && <Label active horizontal content={description} />}
        </div>
        <Image w={50} h={50} src={src} />
      </div>
    );
  };

  const handleSearchChange = React.useCallback((e, data) => {
    clearTimeout(timeoutRef.current);
    dispatch({ type: "START_SEARCH", query: data.value });

    timeoutRef.current = setTimeout(() => {
      if (data.value.length === 0) {
        dispatch({ type: "CLEAN_QUERY" });
        return;
      }

      const re = new RegExp(_.escapeRegExp(data.value), "i");
      const isMatch = (result) =>
        re.test(result.description) || re.test(result.title);

      dispatch({
        type: "FINISH_SEARCH",
        results: _.filter(source, isMatch),
      });
    }, 300);
  }, []);
  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    
      <Search
        fluid={true}
        loading={loading}
        onResultSelect={(e, data) => {
          dispatch({ type: "UPDATE_SELECTION", selection: data.result.title });
          navigate(navigatePath + (data.result.id || ""));
        }}
        noResultsMessage={"Ничего не найдено"}
        onSearchChange={handleSearchChange}
        resultRenderer={resultRenderer}
        results={results}
        placeholder="Поиск"
        value={value}
      />
    
  );
};

export { SearchBox };
