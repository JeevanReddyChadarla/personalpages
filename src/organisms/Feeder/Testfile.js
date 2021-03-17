import React from 'react'

import { useQuery, gql } from '@apollo/client';

const GET_USERS = gql`
  query {
    users{
        id,
        name
    }
  }
`;

export const Testfile = () => {
    const { loading, error, data } = useQuery(GET_USERS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return data.users.map((user, index) => (
        <div key={index}>
            <p>
                {user.name}
            </p>
        </div>
    ));
}
