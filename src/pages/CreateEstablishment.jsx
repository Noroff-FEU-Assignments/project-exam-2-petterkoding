import React from 'react'
// import Create from '../components/admin/Create';
import Motion from '../components/motion/Motion';
import CreateAxios from "../components/admin/CreateAxios";
import styled from 'styled-components';

const CreateEstablishment = () => {

    return (
        <Motion>
            <Container>
            {/* <Create/> */}
                <CreateAxios/>
            </Container>
        </Motion>
    )
}

export default CreateEstablishment

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;