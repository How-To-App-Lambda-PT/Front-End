import React, { useContext, useEffect } from 'react';
import { GuidesContext, UserContext } from '../../contexts/index'
import HowToCard from '../Dashboard-page/HowToCard'
import { Redirect } from 'react-router-dom'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Table, Search } from 'semantic-ui-react';
import Header from '../Header'
import HowToCardList from '../Dashboard-page/HowToCardList';
import SearchField from '../SearchResults/SearchField';
import { axiosWithAuth } from '../../utils/axiosWithAuth';


const UserPageNewsfeed = props => {    
    const [guides, setGuides] = useContext(GuidesContext);
    const [user] = useContext(UserContext);

  useEffect(() => {
    axiosWithAuth('get', `https://bw-how-to.herokuapp.com/guides`)
      .then(res => setGuides(res.data))
      .catch(err => console.log('UserPageNewsfeed: usewEffect: GET: err=', err))
   }, [])


        if(!guides){
            return <h2>loading...</h2>
        }
        return(
            <div>
            <Header />
            <Table attached="top" basic>

              <Table.Header>
                  <Table.HeaderCell className='tables'>.</Table.HeaderCell>
                  <Table.HeaderCell className='tables welcome'><h1>Welcome {user.username}</h1></Table.HeaderCell>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell verticalAlign='top' className='nav_table'>
                    <Table celled structured>
                      <Table.Body>
                        <Table.Row>
                          <Table.Cell textalign='center' className='nav_top'><h3>Top How-tos</h3></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell textalign='center'><h3>Following</h3></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell textalign='center'><h3>Message Boards</h3></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell textalign='center'><h3><Link to='/dashboard'>My Account</Link></h3></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell textalign='center'><h3><Link to='/createpost'>Create a How-to</Link></h3></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell textalign='center'><SearchField history={props.history}/></Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table>
                  </Table.Cell>
                  <Table.Cell>
                    <Table>
                      <Table.Body>
                        {guides.map(guide => 
                          // console.log(guide)
                        //  <Link to={`/guides/${guide.id}`}>
                          <HowToCard key={guide.id} guide={guide} type={'newsfeed'} history={props.history}/>
                        //  </Link>
                          )}
                      </Table.Body>
                    </Table>
                  </Table.Cell>
                </Table.Row>                
              </Table.Body>  
               
            </Table>
            </div>
    );
}

export default UserPageNewsfeed

