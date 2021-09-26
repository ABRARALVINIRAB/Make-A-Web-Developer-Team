import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Member from '../Member/Member';
import './TeamMembers.css'


const TeamMembers = () => {
    const [members, setMembers] = useState([]);
    useEffect(() => {
        fetch('./fakedata.JSON')
            .then(res => res.json())
            .then(data => setMembers(data))
    }, []);
    const [addMember, setAddMember] = useState([])
    const handleAddToMember = (singleMember) => {
        const newState = [...addMember, singleMember];
        setAddMember(newState)

    }
    // console.log(addMember)

    return (
        <div className='team-members-container'>
            
            <div className='left-side-members-container'>
                {
                    members.map(member => <Member member={member}
                        key={member.id}
                        handleAddToMember={handleAddToMember}

                    ></Member>)
                }
            </div>
            <div>
                <Cart addMember={addMember} ></Cart>
            </div>

        </div>
    );
};

export default TeamMembers;