import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
    margin: "auto",
    marginTop: 50,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)"
  },
  heading: {
    textAlign: "center",
    color: "#2b2b2b",
    marginBottom: 20
  },
  icon: {
    marginRight: 5,
    color: "#000"
  },
  button: {
    margin: 10
  }
});

const Posts = () => {
  const classes = useStyles();
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.posts);
        setPost(data.posts);
      });
  }, []);

  const handleFetchData = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.posts);
        setPost(data.posts);
      });
  };

  const handleClearData = () => {
    setPost([]);
  };

  return (
    <div className={classes.root}>
      <h1 className={classes.heading}>Posts</h1>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={handleFetchData}
      >
        Fetch Data
      </Button>
      <Button
        className={classes.button}
        variant="contained"
        color="secondary"
        onClick={handleClearData}
      >
        Clear All Data
      </Button>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {post.map((item) => {
              const { id, title } = item;
              return (
                <TableRow key={id}>
                  <TableCell component="th" scope="row">
                    <AccountCircle className={classes.icon} />
                    {id}
                  </TableCell>
                  <TableCell>{title}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Posts;
