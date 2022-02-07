import React, { useState, useContext} from 'react';
import useAxios from "../../hooks/useAxios";
import { BASE_URL } from "../../constants/API";
import axios from "axios";
import AuthContext from '../../context/AuthContext';
import { useForm } from 'react-hook-form';
import Heading from '../common/Heading';
import styled from "styled-components";

const Create = () => {

    // const [newEstablishment, setNewEstablishment] = useState({});
    const [publishError, setPublishError] = useState(null);
    const [submitting, setSubmitting] = useState(false);
    const [auth, setAuth] = useContext(AuthContext);

    const { handleSubmit, register, formState } = useForm({ mode: "onChange" });

    const { errors, isValid } = formState;

    const http = useAxios();
    
    async function onSubmit(data, e) {
        e.preventDefault();
        setSubmitting(true);
        setPublishError(null);
        // console.log(data)
        let formData = new FormData();
        formData.append("file", data.image[0])
        formData.append("data", data)

        try {
            const response = await http.post('/api/establishments', {
                "Content-type": "multipart/form-data",
                headers: {
                    "Authorization": `Bearer ${auth.jwt}`,
                },
                data: formData
        });
            console.log(response)
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
                        <Label htmlFor="title">Title</Label>
                        <Input
                            type="text"
                            name="title"
                            id="title"
                            {...register("title", {required: true, minLength: 10})}/>
                        {errors.title && <p>Title is too short</p>}
                    </InputField>
                    <InputField>
                        <Label htmlFor="address">Address</Label>
                        <Input
                            type="text"
                            name="address"
                            id="address"
                            {...register("address", {required: true, minLength: 15})}/>
                        {errors.address && <p>Address is required</p>}
                    </InputField>
                    <InputField>
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            type="text"
                            name="description"
                            id="description"
                            {...register("description", {required: true, minLength: 20})}/>
                        {errors.description && <p>Description is too short</p>}
                    </InputField>
                    <InputField>
                        <Label htmlFor="shortDescription">Short Description</Label>
                        <Textarea
                            type="text"
                            name="shortDescription"
                            id="shortDescription"
                            {...register("shortDescription", {required: true, minLength: 10})}/>
                        {errors.shortDescription && <p>Description is too short</p>}
                    </InputField>
                    <Flex>
                        <InputField>
                            <Label htmlFor="title">Type</Label>
                            <SmallInput
                                type="text"
                                name="type"
                                id="type"
                                {...register("type", {required: true, minLength: 1})}/>
                            {errors.title && <p>Type is required</p>}
                        </InputField>
                        <InputField>
                            <Label htmlFor="rating">Rating</Label>
                            <SmallInput
                                type="number"
                                name="rating"
                                id="rating"
                                {...register("rating", { required: false, min: 1, max: 10 })} />
                            {errors.rating && <p>Rating must be a value between 1-10</p>}
                        </InputField>
                        <InputField>
                            <Label htmlFor="beds">Beds</Label>
                            <SmallInput
                                type="number"
                                name="beds"
                                id="beds"
                                {...register("beds", { required: false, min: 1})} />
                            {errors.beds && <p>Establishment must have atleast 1 bed</p>}
                        </InputField>
                    </Flex>
                    <InputField>
                        <Label htmlFor="facilities">Facilities</Label>
                        <SmallInput
                            type="text"
                            name="facilities"
                            id="facilities"
                            {...register("facilities", { required: true})} />
                            {errors.facilities && <p>Add available facility</p>}
                    </InputField>

                    <InputField>
                        <Label htmlFor="image">Image</Label>
                        <Input
                            type="file"
                            name="image"
                            id="image"
                            {...register("image", {required: false})}/>
                        {errors.image && <p>Image is required</p>}
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


const InputField = styled.div`
    margin: 0.8rem 0 1.3rem 0;
    width: 100%;
`;

const Fieldset = styled.fieldset`
    border: none;
`;

const Label = styled.label`
    font-weight: 600;
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