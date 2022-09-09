import type { NextPage, GetStaticProps } from "next";

const Home: React.FC<Props> = ({ users, error }) => {
  return (
    <section>
      <header>
        <h1>List of users</h1>
      </header>
      {error && <div>There was an error.</div>}
      {!error && users && (
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.username}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

export const getStaticProps = async () => {
  const data = {
    error: false,
    users: [
      {
        username: "john",
        email: "john@doe.com",
        name: "John Doe",
      },
      {
        username: "jane",
        email: "jane@doe.com",
        name: "Jane Doe",
      },
      {
        username: "joe",
        email: "joe@doe.com",
        name: "Joe Public",
      },
    ],
  };
  return {
    props: data,
  };
};

type Props = {
  error: boolean;
  users: {
    username: string;
    email: string;
    name: string;
  };
};

export default Home;
