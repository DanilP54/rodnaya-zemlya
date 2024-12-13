import { Chip, Group } from "@mantine/core";
import { useState } from "react";
import { Input } from "semantic-ui-react";
import { PRIMARY_TURQUOISE, SECONDARY_TURQUOISE } from "../../../constants";
import { SearchBox } from "../../search/LocalSearch";
import { turquoiseBookList } from "../../../data/literature/turquoise";

const primaryColor = PRIMARY_TURQUOISE;
const secondaryColor = SECONDARY_TURQUOISE;

export function TurquoiseFiltersLiterature({ setValue, value }) {
  const [checkedCom, setCheckedCom] = useState(false);
  const [checkedNotCom, setCheckedNotCom] = useState(false);

  const [doc, setDoc] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginLeft: "128px",
        padding: "10px 68px",
        borderLeft: `6px solid ${primaryColor}`,
        borderBottom: `6px solid ${primaryColor}`,
        borderRight: `6px solid ${primaryColor}`,
        borderBottom: `6px solid ${primaryColor}`,
        backgroundColor: secondaryColor,
      }}
    >
      <div style={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <Chip.Group onChange={setValue} value={value}>
              <Group gap={"10px"} align="center">
                <Chip
                  value="Коммерческое"
                  checked={checkedCom}
                  onClick={(e) => {
                    if (e.target.value === value) {
                      setValue(null);
                    }

                    if (checkedNotCom) setCheckedNotCom(false);
                    if(doc) setDoc(false);
                    setCheckedCom((v) => !v);
                  }}
                  style={{
                    fontWeight: "bold",
                    border: "none",
                    outline: "none",
                    backgroundColor: "transparent",
                    padding: "0 0 0 0",
                  }}
                  // icon={<IconX />}
                  color={checkedCom ? primaryColor : ""}
                  radius={"xs"}
                  size="md"
                  variant={checkedCom ? "light" : "none"}
                >
                  Коммерческое
                </Chip>
                <Chip
                  value="Некоммерческое"
                  checked={checkedNotCom}
                  onClick={(e) => {
                    if (e.target.value === value) {
                      setValue(null);
                    }

                    if (checkedCom) setCheckedCom(false);
                    if (doc) setDoc(false);
                    setCheckedNotCom((v) => !v);
                  }}
                  style={{
                    fontWeight: "bold",
                    border: "none",
                    outline: "none",
                    backgroundColor: "transparent",
                    padding: "0 0 0 0",
                  }}
                  // icon={<IconX />}
                  color={checkedNotCom ? primaryColor : ""}
                  radius={"xs"}
                  size="md"
                  variant={checkedNotCom ? "light" : "none"}
                >
                  Некоммерческое
                </Chip>
                <Chip
                  value="Документальное"
                  checked={doc}
                  onClick={(e) => {
                    if (e.target.value === value) {
                      setValue(null);
                    }

                    if (checkedCom) setCheckedCom(false);
                    if (checkedNotCom) setCheckedNotCom(false);
                    setDoc((v) => !v);
                  }}
                  style={{
                    fontWeight: "bold",
                    border: "none",
                    outline: "none",
                    backgroundColor: "transparent",
                    padding: "0 0 0 0",
                  }}
                  // icon={<IconX />}
                  color={doc ? primaryColor : ""}
                  radius={"xs"}
                  size="md"
                  variant={doc ? "light" : "none"}
                >
                  Документальное
                </Chip>
              </Group>
            </Chip.Group>
          </div>
          <div
            style={{
              width: "300px",
            }}
          >
            <SearchBox
              data={turquoiseBookList}
              navigatePath={"/app/turquoise/l/"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
