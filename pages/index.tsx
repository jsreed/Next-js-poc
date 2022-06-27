import {Box, Button, Container} from '@chakra-ui/react'
import Layout from '../components/layout'

import Head from 'next/head'

import Branch from "../lib/model/branch";
import {useCallback, useState} from "react";
import {GetStaticProps} from "next";

type Props = {
    // allPosts: Post[]
    branches: Branch[]
    preview?: boolean
}

const Index = ({ branches }: Props) => {
    const [isEdit, setEdit] = useState(false);
    const toggleEdit = useCallback(() => setEdit(!isEdit), [isEdit]);
    return (
        <>
            <Container>
                <Box>
                    {!isEdit ? (
                            <Box>
                                <button onClick={toggleEdit}>Edit</button>
                            </Box>
                        )
                        : (
                            <Box>
                                <button onClick={toggleEdit}>Save</button>
                            </Box>
                        )}
                </Box>
            </Container>
            <Container>
                <ul>
                { branches.map((branch) =>
                    <li key={branch.id}>branch: {branch.id}</li>
                )}
                </ul>

            </Container>
        </>
    )
}

export default Index

export const getStaticProps: GetStaticProps = async ({
     preview,
     previewData,
 }) => {
    const stubBranches: Branch[] = [
        {
            id: "eefjkls",
            childBranches: [],
            leafs: []
        },
        {
            id: "nyhtr",
            childBranches: [],
            leafs: []
        },
        {
            id: "engrgre",
            childBranches: [],
            leafs: []
        },
        {
            id: "htrger",
            childBranches: [],
            leafs: []
        }
    ]

    if (preview) {
        const {snapshotId} = previewData as { snapshotId: string };
    }

    return {
        props: {
            branches: stubBranches
        },
    }
}