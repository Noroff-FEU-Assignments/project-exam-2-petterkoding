import React, { useState, useContext} from 'react';
import axios from "axios";
import useAxios from "../../hooks/useAxios";
import AuthContext from '../../context/AuthContext';
import { BASE_URL } from '../../constants/API';
import { useForm } from 'react-hook-form';
import Heading from '../common/Heading';
import facility from "./facility.json"
import styled from "styled-components";

const Create = () => {

    const [publishError, setPublishError] = useState(null);
    const [submitting, setSubmitting] = useState(false);
    const [auth, setAuth] = useContext(AuthContext);
    const [facilities, setFacilities] = useState(facility);

    const http = useAxios();

    document.title = "Holidaze | Create new establishment";

    const { handleSubmit, register, reset, formState } = useForm({ mode: "onChange" });

    const { errors, isValid } = formState;

    // const corsURL = "https://noroffcors.herokuapp.com/";

    // const corsFix = corsURL + BASE_URL;

    const url = `${BASE_URL}/api/establishments`;

    const formData = new FormData(); 
    

    // using fetch
    async function onSubmit({title, address,description, short_description, type, rating, beds, facilities, img}) {
        setSubmitting(true);
        const data = JSON.stringify({ title, address, description, short_description, type, rating, beds, facilities})        
        formData.append("data", data);
        formData.append('files.img', img[0]);
        const options = {
            method: "POST",
            body: formData,
            headers: {
                Authorization: `Bearer ${auth.jwt}`,
            }
        }
        try {
            const response = await fetch(url, options);
            const json = await response.json();
            console.log(json);
        } catch (error) {
            console.log(error)
            setPublishError(error.toString());
        } finally {
            setSubmitting(false)
            reset();
        }
    }

    
    return (
        <>
            <Heading size="1">Start creating</Heading>
            {publishError && <p>{publishError}</p>}
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Fieldset>
                    <InputField>
                    <Label htmlFor="title">Title:</Label>
                        <Input
                            type="text"
                            name="title"
                            {...register("title", {required: true, minLength: 10})}/>
                            {errors.title && <p>Title is too short</p>}
                    </InputField>
                    
                    <InputField>
                        <Label htmlFor="address">Address:</Label>
                        <Input
                            type="text"
                            name="address"
                            {...register("address", {required: true, minLength: 15})}/>
                            {errors.address && <p>Address is required</p>}
                    </InputField>
                    
                    <InputField>
                        <Label htmlFor="description">Description:</Label>
                        <TextArea
                            type="text"
                            name="description"
                            {...register("description", {required: true, minLength: 20})}/>
                        {errors.description && <p>Description is too short</p>}
                    </InputField>

                    <InputField>
                        <Label htmlFor="short_description">Short Description:</Label>
                        <SmallTextArea
                            type="text"
                            name="short_description"
                            {...register("short_description", {required: true, minLength: 10})}/>
                        {errors.short_description && <p>Description is too short</p>}
                    </InputField>

                    <Flex>
                        <InputField style={{flex:2}}>
                            <Label htmlFor="title">Type:</Label>
                            <SmallSelect
                                type="text"
                                name="type"
                                {...register("type", { required: true, minLength: 1 })}>
                                <option value="">Please select</option>
                                <option value="apt">Apartment</option>
                                <option value="bnb">BnB</option>
                                <option value="hotel">Hotel</option>
                                <option value="guesthouse">Guesthouse</option>
                                <option value="house">House</option>
                            </SmallSelect>
                            {errors.type && <p>Type is required</p>}
                        </InputField>
                        <InputField style={{flex:1}}>
                            <Label htmlFor="rating">Rating:</Label>
                            <Input
                                type="number"
                                name="rating"
                                id="rating"
                                
                                {...register("rating", { required: true, min: 1, max: 10 })} />
                            {errors.rating && <p>Rating must be a value between 1-10</p>}
                        </InputField>
                        <InputField style={{flex:1}}>
                            <Label htmlFor="beds">Beds:</Label>
                            <Input
                                type="number"
                                name="beds"
                                
                                {...register("beds", { required: true, min: 1})} />
                            {errors.beds && <p>The establishment must have atleast 1 bed</p>}
                        </InputField>
                    </Flex>

                    <InputField>
                        <Label htmlFor="facilities">Add Facilities</Label>
                        <CheckboxFlex>
                            {facilities.map((el, i) => {
                                return (
                                    <CheckboxContainer key={el.id}>
                                        <Label htmlFor={el.name}>{el.name}</Label>
                                        <input
                                            type="checkbox"
                                            name="facilities"
                                            value={el.id}
                                            {...register("facilities", {required: true})}/>
                                    </CheckboxContainer>
                                );
                            })}
                        </CheckboxFlex>
                    </InputField>

                    <InputField >
                        <Label htmlFor="img">Image</Label>
                        <Input
                            type="file"
                            name="img"
                            accept=".png, .jpg, .jpeg"
                            {...register("img", {required: true})}/>
                        {errors.img && <p>Image is required</p>}
                    </InputField>

                    <Button type="submit" disabled={!isValid}>
                        {submitting ? "Publishing..." : "Publish"}
                    </Button>

                </Fieldset>
            </Form>
        </>
    );
};

export default Create;

const Form = styled.form`
    padding: 2rem 3rem;
    background: #ffffff;
    border-radius: 15px;
    width: 100%;
    max-width: 600px;
    box-shadow: 4px 7px 20px rgba(0, 0, 0, .2);
    position: relative;
    margin: 2rem 0 5rem 0;

    &:before{
        position: absolute;
        content:"";
        left: -7px;
        top: -7px;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background: rgb(19,100,222);
        background: linear-gradient(49deg, rgba(19,100,222,1) 4%, rgba(83,48,93,1) 95%);  
        z-index: -1;
        padding: 7px;
    }

    @media (max-width: 680px){
        max-width: 100%;
    }
`;

const InputField = styled.div`
    margin: 0.8rem 0 1.3rem 0;
    position: relative;
    width: 100%;
`;

const Fieldset = styled.fieldset`
    border: none;
`;

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;
`;

const CheckboxFlex = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 2rem 0;
`;

const CheckboxContainer = styled.div`
    width: auto;
    text-align: center;
    padding: 5px 10px;
    background: #e4e4e4;
    background:#eeeeee;
    border-radius: 10px;
    
    label{
        white-space: nowrap;
        font-weight: 400;
        margin-bottom: 0.2rem;
        font-size: 0.8rem;
    }
        input{
            width: 30px;
            height: 30px;
            

            &:hover{
                cursor: pointer;
            }
        }
    &:hover{
        background: #d4d4d4;
    }  
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.3rem;
  color: #363636;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  font-size: 1rem;
  background: none;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  padding: 7px;
  box-shadow: 1px 2px 4px rgba(0,0,0,0.1);

  &::placeholder {
    font-size: 0.9rem;
    color: ${(props) => props.theme.lightGrey};
  }

  &:focus{
    border: 2px solid #2c9dd1;
  }
`;

const SmallSelect = styled.select`
   width: 100%;
  height: 40px;
  border: none;
  outline: none;
  font-size: 1rem;
  background: none;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  padding: 7px;
  box-shadow: 1px 2px 4px rgba(0,0,0,0.1);
`;

const TextArea = styled.textarea`
  border: none;
  outline: none;
  height: 170px;
  width: 100%;
  resize: none;
  background: none;
  font-size: 1rem;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  padding: 7px;
  box-shadow: 1px 2px 4px rgba(0,0,0,0.1);
  &::placeholder {
    font-size: 0.9rem;
    color: ${(props) => props.theme.lightGrey};
  }
  &:focus{
    border: 2px solid #2c9dd1;
  }
`;

const SmallTextArea = styled(TextArea)`
    height: 120px;
`;

const Button = styled.button`
  border: none;
  font-size: 1.3rem;
  padding: 1rem 2rem;
  border-radius: 15px;
  background: ${props => props.theme.seaBlack};
  color: white;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:disabled{
    background: ${props=>props.theme.disabledBg};
    color: ${props=>props.theme.disabledColor};
    &:hover{
        cursor: default;
    }
  }

  &:hover{
      cursor: pointer;
  }

  @media (max-width: 680px){
    padding: 1rem 2rem;
  }
`;

