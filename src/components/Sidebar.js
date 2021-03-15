import React from 'react'
import styled from 'styled-components'
import SidebarOption from './SidebarOption'
import { useCollection } from 'react-firebase-hooks/firestore'
import { useAuthState } from 'react-firebase-hooks/auth';
import { db, auth } from '../firebase';
import { leftSidebarMenu } from '../data'

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import CreateIcon from '@material-ui/icons/Create'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';

const Sidebar = () => {

    const [channels] = useCollection(db.collection('rooms'));
    const [user] = useAuthState(auth)

    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>{user?.displayName}</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user?.email}
                    </h3>
                </SidebarInfo>
                <CreateIcon />
            </SidebarHeader>
            {
                leftSidebarMenu.map(item => (
                    <SidebarOption 
                        key={item.id}
                        Icon={item.icon}
                        title={item.title}
                    />
                ))
            }
            <hr />
            <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
            <hr />
            <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />
            {channels?.docs.map(doc => (
                <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
            ))}
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
    color: white;
    background-color: var(--slack-color);
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;

    > hr {
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #49274b;
    }
`

const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;

    > .MuiSvgIcon-root {
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 999px;
    }
`

const SidebarInfo = styled.div`
    flex: 1;

    > h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }

    > h3 {
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
    }

    > h3 > .MuiSvgIcon-root {
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;
    }
`
