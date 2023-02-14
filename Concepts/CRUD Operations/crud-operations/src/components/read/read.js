import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import axios from "axios";

export default function Read() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get("https://63eb6730bfdd429967471ca8.mockapi.io/Crud")
      .then((getData) => {
        setApiData(getData.data);
      });
  });

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>FIRST NAME</Table.HeaderCell>
            <Table.HeaderCell>LAST NAME</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {apiData.map((data) => {
            const { id, firstName, lastName } = data;
            return (
              <>
                <Table.Row key={id}>
                  <Table.Cell>{id}</Table.Cell>
                  <Table.Cell>{firstName}</Table.Cell>
                  <Table.Cell>{lastName}</Table.Cell>
                  <Table.Cell>
                    <Button color="green">Update</Button>
                  </Table.Cell>
                  <Table.Cell>
                    <Button color="red">Delete</Button>
                  </Table.Cell>
                </Table.Row>
              </>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
