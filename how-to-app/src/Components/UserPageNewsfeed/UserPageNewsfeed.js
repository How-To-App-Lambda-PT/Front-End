import React, { useContext, useEffect } from 'react';
import { GuidesContext, UserContext } from '../../contexts/index'
import HowToCard from '../Dashboard-page/HowToCard'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Table } from 'semantic-ui-react';
import Header from '../Header'
import SearchField from '../SearchResults/SearchField';
import { axiosWithAuth } from '../../utils/axiosWithAuth';


const UserPageNewsfeed = props => {

  const [guides, setGuides] = useContext(GuidesContext);
  // const [user] = useContext(UserContext);
  const localUser = JSON.parse(localStorage.user)



  useEffect(() => {
    axiosWithAuth('get', `https://bw-how-to.herokuapp.com/guides`)
      .then(res => {
        setGuides(res.data)
        localStorage.setItem('guides', JSON.stringify(res.data))
      })
      .catch(err => console.log('UserPageNewsfeed: useEffect: GET: err=', err))
  }, [])


  if (!guides) {
    return <h2>loading...</h2>
  }
  return (
    <div>
      <Header />
      <Table attached="top" basic>

        <Table.Header>
          <Table.HeaderCell className='tables'></Table.HeaderCell>
          <Table.HeaderCell className='tables welcome'><h1>Welcome {localUser.username}</h1></Table.HeaderCell>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell verticalAlign='top' className='nav_table'>
              <Table celled structured>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell className='nav_top'><h3>Top How-tos</h3></Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell ><h3>Following</h3></Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell ><h3>Message Boards</h3></Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell ><h3><Link to='/dashboard'>My Account</Link></h3></Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell ><h3><Link to='/createpost'>Create a How-to</Link></h3></Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell ><SearchField history={props.history} /></Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Table.Cell>
            <Table.Cell>
              {guides.map(guide =>
                <HowToCard key={guide.id} guide={guide} type={'newsfeed'} history={props.history} />
              )}
            </Table.Cell>
          </Table.Row>
        </Table.Body>

      </Table>
    </div>
  );
}

export default UserPageNewsfeed

