import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Member from '../Member/Member';
import './TeamMembers.css'

const TeamMembers = () => {
    const [members, setMembers] = useState([]);
    useEffect(() => {
        fetch('./fakedata.JSON')
            .then(res => res.json())
            .then(data => setMembers(data))
    }, []);
    const [addmember, setMember] = useState([])
    const membersAdd = (members) => {

        const newCount = [...addmember, members];
        setMember(newCount);
    }

    return (
        <div className='team-members-container'>
            <div className='left-side-members-container'>
                {
                    members.map(member => <Member member={member}
                        membersAdd={membersAdd}
                    ></Member>)
                }
            </div>
            <div>
                <Cart addmember={addmember}></Cart>
            </div>

        </div>
    );
};

export default TeamMembers;