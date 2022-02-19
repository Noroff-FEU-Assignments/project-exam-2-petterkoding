import React, {useState, useEffect} from 'react'
import FeaturedEstablishment from './FeaturedEstablishment';
import {motion} from "framer-motion";
import styled from "styled-components";
import Paragraph from '../common/Paragraph';

const Featured = ({ arr }) => {

    const [featured, setFeatured] = useState([]);

    useEffect(() => {
        const featuredList = arr.filter((el) => el.attributes.rating > 5);
        setFeatured(featuredList)
    },[arr])
    
    console.log(featured)

  return (
        <Container>
            <Hidden>
                <MotionHeading
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{duration: 1.5}}>
                    Featured
                </MotionHeading>
            </Hidden>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{duration: 1.8, delay: 1}}>
                Community ranks the best places to stay in Bergen 2022
            </motion.p>
            <Flex>
                {arr && featured.map((est, i) => (
                        <motion.div
                            key={est.id}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1}}
                            transition={{ duration: 0.5, delay: i + 0.5 * 0.3 }}>
                            <FeaturedEstablishment attributes={est.attributes} id={est.id} />
                        </motion.div>)
                    )}
            </Flex>
        </Container>
  )
}

export default Featured

const Container = styled.div`
    margin: 4rem 0;
`;

const Flex = styled.div`
    display: flex;
    flex-wrap: nowrap;
    gap: 2rem;
    margin-top: 2rem;

    @media (max-width: 680px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 270px;
        gap: 1rem;
        margin-top: 1rem;
    }
`;


const MotionHeading = styled(motion.h2)`
    font-size: 1.5rem;
`;

const Hidden = styled.div`
    overflow: hidden;
`;
