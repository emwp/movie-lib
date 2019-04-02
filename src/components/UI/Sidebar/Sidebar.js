import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Sidebar = ({ showSidebar }) => {
  return (
    <React.Fragment>
      {showSidebar ? (
        <SidebarWrapper>
          <p>Sidebar</p>
        </SidebarWrapper>
      ) : null}
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  showSidebar: state.navigation.showSidebar,
});

export default connect(mapStateToProps)(Sidebar);

const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 25vw;
  min-width: 15rem;
  z-index: 200;
  background: #263238;
  color: white;
`;
