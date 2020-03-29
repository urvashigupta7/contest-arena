import React, { useEffect, useContext } from 'react';
import AuthContext from '../../Context/auth/authContext'
import Search from '../contestProblem/search'
import Contest from './contest'
import Timer from '../contestProblem/timer'
const Home = (props) => {

    const authContext = useContext(AuthContext);

    useEffect(() => {
        if (localStorage.accessToken) {
            authContext.loadPage();
        }
    //eslint-disable-next-line
    }, []);
    return (
        <div>
            <Search />
            <div className='contest'>
             <div className="timermobile">
                 <Timer/>
                 </div>   
             <div>   
            <Contest/>
            </div>
            <div className="timer">
                <Timer/>
            </div>
            </div>
        </div>

    )

}
export default Home;