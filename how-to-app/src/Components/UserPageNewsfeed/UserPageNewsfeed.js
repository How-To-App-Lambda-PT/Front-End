import React, { useContext } from 'react';
import { GuidesContext, UserContext } from '../../contexts/index'
import HowToCard from '../Dashboard-page/HowToCard'
import { Redirect } from 'react-router-dom'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Table, Search } from 'semantic-ui-react';
import Header from '../Header'
import HowToCardList from '../Dashboard-page/HowToCardList';


const UserPageNewsfeed = props => {    
    const [guides] = useContext(GuidesContext);
    const [user] = useContext(UserContext);


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
                          <Table.Cell textAlign='center'><h3>Top How-tos</h3></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell textAlign='center'><h3>Following</h3></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell textAlign='center'><h3>Message Boards</h3></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell textAlign='center'><h3><Link to='/dashboard'>My Account</Link></h3></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell textAlign='center'><h3><Link to='/createpost'>Create a How-to</Link></h3></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell textAlign='center'><h3>Search</h3><Search input={{ icon: 'search', iconPosition: 'left' }} /></Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table>
                  </Table.Cell>
                  <Table.Cell>
<<<<<<< HEAD
                    {guides.map((guide, i)=>
                      <HowToCard key={guide.id} guide={guide} type={'newsfeed'} i={i} history={props.history}/>
                    )}
=======
                    {/* {guides.map(guide=>
                      <HowToCard key={guide.id} guide={guide} />
                    )} */}
                    <HowToCardList rows={1}/>
>>>>>>> 5c0296506929da711af0c85b23ffdfbc452d1faf
                  </Table.Cell>
                </Table.Row>                
              </Table.Body>  
               
            </Table>
            </div>
    );
}

export default UserPageNewsfeed

