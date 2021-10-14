import React from "react";
import server from "../../server/server";
import { useHistory } from "react-router-dom";
// import {
//   Container,
//   Content,
//   Header,
//   Table,
//   Button,
//   Title,
//   ButtonLogout,
//   Input,
// } from "./styles";
import Table from "../../components/table";

// const initialState = { id: undefined, nome: "", cidade: "" };

function Player() {
  // const [post, setPost] = React.useState(initialState);
  const [teste, setGet] = React.useState(null);
  // const history = useHistory();
  async function getTeste() {
    const data = await server.get("/teste");
    console.log(data.data);
    setGet(data.data);
  }

  React.useEffect(() => {
    getTeste();
  }, []);

  // async function handleClick() {
  //   if (post.id) {
  //     await server.put(`/edit/${post.id}`, {
  //       nome: post.nome,
  //       cidade: post.cidade,
  //     });
  //     getTeste();
  //     setPost(initialState);
  //   } else {
  //     await server.post("/cadastro", post);
  //     console.log(post);
  //     getTeste();
  //     setPost(initialState);
  //   }
  // }

  // async function handleDelete(id) {
  //   await server.delete(`/delete/${id}`);
  //   getTeste();
  // }

  // async function handleEdit(data) {
  //   setPost(data);
  // }

  return (
    //   <Container>
    //     <Header>
    //       <ButtonLogout
    //         onClick={() => {
    //           localStorage.removeItem("token");
    //           history.push("/");
    //         }}
    //       >
    //         Logout
    //       </ButtonLogout>
    //     </Header>
    //     <div>
    //       <Content>
    //         <Title>Make your registration</Title>

    //         <Input
    //           type="name"
    //           value={post.nome}
    //           onChange={(e) => setPost({ ...post, nome: e.target.value })}
    //           placeholder="Name"
    //         ></Input>

    //         <Input
    //           type="name"
    //           value={post.cidade}
    //           onChange={(e) => setPost({ ...post, cidade: e.target.value })}
    //           placeholder="City"
    //         ></Input>
    //         <Button onClick={handleClick} style={{ background: "#b3b3b3" }}>
    //           Send
    //         </Button>
    //       </Content>
    //     </div>
    //     <div>
    //       <Table>
    //         <tr>
    //           <th>Id</th>
    //           <th>Name</th>
    //           <th>City</th>
    //         </tr>
    //         {get.map((data) => (
    //           <tr key={data.id}>
    //             <td>{data.id}</td>
    //             <td>{data.nome}</td>
    //             <td>{data.cidade}</td>
    //             <td>
    //               <Button onClick={() => handleEdit(data)} color={"#b3b3b3"}>
    //                 Edit
    //               </Button>
    //             </td>
    //             <td>
    //               <Button onClick={() => handleDelete(data.id)} color={"#b3b3b3"}>
    //                 Delete
    //               </Button>
    //             </td>
    //           </tr>
    //         ))}
    //       </Table>
    //     </div>
    //   </Container>

    <Table
      columns={teste ? Object.keys(teste[0]) : []}
      data={teste ? teste : []}
      title="Lista de jogadores"
    ></Table>
  );
}

export default Player;
