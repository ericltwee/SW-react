import React, { useState, useEffect } from "react";
import axios from "axios";

function Monstar() {
  const [monster, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://insta.nextacademy.com/api/v1/users").then((result) => {
      console.log(result);
      setUsers(result.data);
    });
  }, []);

  return (
    <div className="App">
      <Container>
        <Row>
          {monster.map((mons) => {
            return (
              <Col key={mons.id} md={12}>
                <Card>
                  <CardBody>
                    <Col>
                      <Image
                        className="col-md-3 my-2 rounded-circle"
                        src={mons.profileImage}
                        alt={mons.username}
                      />
                    </Col>
                    {/* <Row>
                      <Col>
                        <div>
                          <UserImages userId={user.id} />
                        </div>
                      </Col>
                    </Row> */}
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Monstar;
// $.ajax({
//     url: 'https://api.airtable.com/v0/app25hZv7kC5FduwL/Monster%20List',
//     method: 'GET',
//     headers: {
//         Authorization: 'Bearer key8txJ4DSHAMTJyD'
//     },
//     success: function (result) {
//         console.log(result)
//     }
// })
