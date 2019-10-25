import React, { useContext } from 'react'
import { Card, Image, Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosWithAuth } from '../../utils/axiosWithAuth'
import { UserContext } from '../../contexts/index'
import StarRatingComponent from 'react-star-rating-component'

const HowToCard = props => {
  const guide = props.guide
  const [user] = useContext(UserContext);
  console.log(props)


  const deleteHowTo = e => {
    
    axiosWithAuth('delete', `https://bw-how-to.herokuapp.com/guides/${guide.id}`)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  }


  const linkHandler = () => {
    localStorage.setItem('guideId', props.id)
  }

  if(props.type == 'newsfeed'){
    return (
      <Table className='newsfeed_how_to_card'>
        <Table.Row>
          <Table.Cell collapsing={true}>        
            <Image
            textAlign='left'
            size="medium"
            src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
            />
          </Table.Cell>

          <Table.Cell verticalAlign='bottom'>
            <p>Tried it: 0</p>
            <p>Category: {guide.type}</p>
            <p>Difficulty: Easy</p>
            <p>Creator: {guide.username}</p>
          </Table.Cell>
          
          <Table.Cell verticalAlign='top' textAlign='left'>
              <Table.Row><Table.Cell><h2>{guide.title}</h2></Table.Cell></Table.Row>
              <Table.Row>
              <Table.Cell textAlign='center'>
                <div>
                  <h2><StarRatingComponent 
                    name="rate1" 
                    editing={false}
                    starCount={5}
                    value={4.7}
                  />
                  </h2>
                </div>
              </Table.Cell>
              </Table.Row>
          </Table.Cell>

          <Table.Cell textAlign='center'>
            {/* <button onClick={props.history.push(`/guides/${guide.id}`)}>Try it</button> */}
          </Table.Cell>
        </Table.Row>
      </Table>
    )
  } else if(props.type == 'searchResult'){
    return(
      <Table>
        <Table.Row className= {(props.i%2) == 1 ? 'markedResult' : ''}>

          <Table.Cell width='7'>
            {guide.title}
          </Table.Cell>

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

          <Table.Cell textAlign='right'>
            <p>Tried: 64 times</p>
          </Table.Cell>

        </Table.Row>
      </Table>
    )
  } else if(props.type == 'account'){
    return(
      <Card />
    )
  }
}

export default HowToCard