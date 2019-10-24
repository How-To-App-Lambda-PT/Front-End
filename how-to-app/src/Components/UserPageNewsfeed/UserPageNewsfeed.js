import React, { useContext } from 'react';
import { GuidesContext, UserContext } from '../../contexts/index'
import HowToCard from '../Dashboard-page/HowToCard'
import { Redirect } from 'react-router-dom'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Table } from 'semantic-ui-react';
import Header from '../Header'


const UserPageNewsfeed = props => {
    
    const [guides] = useContext(GuidesContext);
    const [user] = useContext(UserContext);


        if(guides==undefined){
            return <h2>loading...</h2>
        }
        return(
            <div>
            <Header />
            <Table attached="top" basic>

              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell className='tables' textAlign='center'>Top How-tos</Table.HeaderCell>
                  <Table.HeaderCell className='tables welcome'><h1>Welcome {user.username}</h1></Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell verticalAlign='top' className='nav_table'>
                    <Table celled>
                      <Table.Body>
                        <Table.Row>
                          <Table.Cell textAlign='center' width='2'><h2>Following</h2></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell textAlign='center'><h2>Message Boards</h2></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell textAlign='center'><h2><Link to='/dashboard'>My Account</Link></h2></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell textAlign='center'><h2><Link to='/createpost'>Create a How-to</Link></h2></Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table>
                  </Table.Cell>
                  <Table.Cell>
                    {guides.map(guide=>
                      <HowToCard key={guide.id} guide={guide} />
                    )}
                  </Table.Cell>
                </Table.Row>                
              </Table.Body>  
               
            </Table>
            </div>
    );
}

export default UserPageNewsfeed

