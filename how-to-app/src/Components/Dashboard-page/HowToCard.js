import React, { useContext } from "react";
import { Image, Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
// import { UserContext } from "../../contexts/index";
import StarRatingComponent from "react-star-rating-component";

const HowToCard = props => {
  const guide = props.guide;
  // const [user] = useContext(UserContext);
  

  const deleteHowTo = e => {
    axiosWithAuth(
      "delete",
      `https://bw-how-to.herokuapp.com/guides/${guide.id}`
    )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const linkHandler = () => {
    localStorage.setItem("guideId", props.guide.id);
  };

  if (props.type == "newsfeed") {
    return (
      <Table className="newsfeed_how_to_card" onClick={linkHandler}>
        <Table.Row>
          <Table.Cell collapsing={true}>
            <Image
              textalign="left"
              size="medium"
              src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
            />
          </Table.Cell>

          <Table.Cell verticalAlign="bottom">
            <p>
              <span className="green">Tried it:</span> <span> 0</span>
            </p>
            <p>
              <span className="green">Category:</span>{" "}
              <span> {guide.type}</span>
            </p>
            <p>
              <span className="green">Difficulty:</span> <span> Easy</span>
            </p>
            <p>
              <span className="green">Creator:</span>{" "}
              <span> {guide.username}</span>
            </p>
          </Table.Cell>

          <Table.Cell verticalAlign="top" textAlign="left">
            <Table.Row>
              <Table.Cell>
                <h2 className="green">{guide.title}</h2>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell textAlign="center">
                <div>
                  <h2>
                    <StarRatingComponent
                      name="rate1"
                      editing={false}
                      starCount={5}
                      value={4.7}
                    />
                  </h2>
                </div>
              </Table.Cell>
            </Table.Row>
            <Table.Cell verticalAlign='center'>
              <Button
                className="try-it"
                as={Link}
                to={`/guides/${guide.id}`}
                style={{
                  color: 'white',
                  backgroundColor: 'green'
                }}
              >Try It</Button>
            </Table.Cell>
          </Table.Cell>
        </Table.Row>
      </Table>
    );
  } else if (props.type == "searchResult") {
    return (
      <Table>
        <Table.Row
          className={props.i % 2 == 1 ? "markedResult" : ""}
        >
          <Table.Cell width="7">{guide.title}</Table.Cell>
          <Table.Cell>
            <div>
              <h2>
                <StarRatingComponent
                  name="rate1"
                  editing={false}
                  starCount={5}
                  value={4.7}
                />
              </h2>
            </div>
          </Table.Cell>

          <Table.Cell textAlign="right">
            <p>Tried: 64 times</p>
          </Table.Cell>
          <Button
            as={Link}
            to={`/guides/${guide.id}`}
            style={{
              color: 'white',
              backgroundColor: 'green',
              marginTop: '10px'
            }}>Try It</Button>
        </Table.Row>
      </Table>
    );
  } else if (props.type == "account") {
    return (
      <Table className="newsfeed_how_to_card" onClick={linkHandler}>
        <Table.Row>
          <Table.Cell collapsing={true}>
            <Image
              textAlign="left"
              size="small"
              src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
            />
          </Table.Cell>

          <Table.Cell verticalAlign="bottom">
            <p>
              <span className="green account_card">Tried it:</span>{" "}
              <span> 0</span>
            </p>
            <p>
              <span className="green account_card">Category:</span>{" "}
              <span> {guide.type}</span>
            </p>
            <p>
              <span className="green account_card">Difficulty:</span>{" "}
              <span> Easy</span>
            </p>
            <p>
              <span className="green account_card">Creator:</span>{" "}
              <span> {guide.username}</span>
            </p>
          </Table.Cell>
          <Table.Cell verticalAlign="top" textAlign="left">
            <Table.Row>
              <Table.Cell>
                <h4 className="green">{guide.title}</h4>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell textAlign="center">
                <div>
                  <StarRatingComponent
                    name="rate1"
                    editing={false}
                    starCount={5}
                    value={4.7}
                  />
                </div>
              </Table.Cell>
            </Table.Row>
          </Table.Cell>

          <Table.Cell textAlign="center">
            <Button icon="edit" as={Link} to={`/editguide/${guide.id}`}/>
            <Button icon="trash" onClick={deleteHowTo}></Button>
          </Table.Cell>
        </Table.Row>
      </Table>
    );
  }
};

export default HowToCard;
