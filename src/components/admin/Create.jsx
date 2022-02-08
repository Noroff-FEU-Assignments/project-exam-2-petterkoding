import React, { useState, useContext } from 'react';
// import axios from "axios";
// import useAxios from "../../hooks/useAxios";
import AuthContext from '../../context/AuthContext';
import { BASE_URL } from '../../constants/API';
import { useForm } from 'react-hook-form';
import Heading from '../common/Heading';
import styled from "styled-components";
import facility from "./facility.json"

const Create = () => {

    const [publishError, setPublishError] = useState(null);
    const [submitting, setSubmitting] = useState(false);
    const [auth, setAuth] = useContext(AuthContext);
    const [facilities, setFacilities] = useState(facility);

    const { handleSubmit, register, formState } = useForm({ mode: "onChange" });

    const { errors, isValid } = formState;

    const corsURL = "https://noroffcors.herokuapp.com/";

    const corsFix = corsURL + BASE_URL;
  

    async function onSubmit(data, e) {
        e.preventDefault();
        setSubmitting(true);
        setPublishError(null);
        const formData = new FormData(e.target);
        // formData.append("files.image", data.img[0]);
        // formData.append("data.name", JSON.stringify(data));
                
        try {
            const response = await fetch(`${corsFix}/api/establishments`, {
                method: "POST",
                body: formData,
                headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${auth.jwt}`,
            },
            });
            const json = await response.json();
            console.log(response, json);
        } catch (error) {
            console.log(error)
            setPublishError(error.toString());
        } finally {
            setSubmitting(false)
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
                            id="title"
                            {...register("title", {required: true, minLength: 10})}/>
                        {errors.title && <p>Title is too short</p>}
                    </InputField>
                    <InputField>
                        <Label htmlFor="address">Address:</Label>
                        <Input
                            type="text"
                            name="address"
                            id="address"
                            {...register("address", {required: true, minLength: 15})}/>
                        {errors.address && <p>Address is required</p>}
                    </InputField>
                    <InputField>
                        <Label htmlFor="description">Description:</Label>
                        <Textarea
                            type="text"
                            name="description"
                            id="description"
                            {...register("description", {required: true, minLength: 20})}/>
                        {errors.description && <p>Description is too short</p>}
                    </InputField>
                    <InputField>
                        <Label htmlFor="short_description">Short Description:</Label>
                        <Textarea
                            type="text"
                            name="short_description"
                            {...register("short_description", {required: true, minLength: 10})}/>
                        {errors.short_description && <p>Description is too short</p>}
                    </InputField>
                    <Flex>
                        <InputField>
                            <Label htmlFor="title">Type:</Label>
                            <SmallInput
                                type="text"
                                name="type"
                                id="type"
                                {...register("type", {required: true, minLength: 1})}/>
                            {errors.title && <p>Type is required</p>}
                        </InputField>
                        <InputField>
                            <Label htmlFor="rating">Rating:</Label>
                            <SmallInput
                                type="number"
                                name="rating"
                                id="rating"
                                {...register("rating", { required: false, min: 1, max: 10 })} />
                            {errors.rating && <p>Rating must be a value between 1-10</p>}
                        </InputField>
                        <InputField>
                            <Label htmlFor="beds">Beds:</Label>
                            <SmallInput
                                type="number"
                                name="beds"
                                id="beds"
                                {...register("beds", { required: false, min: 1})} />
                            {errors.beds && <p>Establishment must have atleast 1 bed</p>}
                        </InputField>
                    </Flex>
                    <InputField>
                        <Heading size="4">Add Facilities</Heading>
                        <Grid>
                            {facilities.map((el) => {
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
                        </Grid>
                    </InputField>

                    <InputField>
                        <Label htmlFor="img">Image</Label>
                        <Input
                            type="file"
                            name="img"
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
    width: 100%;
    max-width: 700px;
    margin-top: 2rem;
`;

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;
`;

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`;

const CheckboxContainer = styled.div`
    width: auto;
    margin-top: 1rem;
    margin-right: 1rem;
    padding: 1rem 1rem;
    background: #f5f1f1;
    border-radius: 15px;
    text-align: center;

    label{
        white-space: nowrap;
        font-weight: 400;
        margin-bottom: 0.2rem;
    }
    
        input{
            width: 30px;
            height: 30px;
        }
    
`;

const InputField = styled.div`
    margin: 0.8rem 0 1.3rem 0;
    width: 100%;
`;

const Fieldset = styled.fieldset`
    border: none;
`;

const Label = styled.label`
    font-weight: 800;
    display: block;
`;

const Input = styled.input`
    height: 40px;
    width: 100%;
    padding: 7px;
`;

const SmallInput = styled.input`
    height: 40px;
    width: 100%;
    padding: 7px;
`;

const Textarea = styled.textarea`
    height: 100px;
    width: 100%;
    resize: none;
    padding: 7px;
`;

const Button = styled.button`
    font-size: 1rem;
    padding: 1rem 2rem;
    border: none;
`;