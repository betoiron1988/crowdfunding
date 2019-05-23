import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Row, Col, Card, Icon, Avatar } from "antd";

const { Meta } = Card;

class AllProjects extends React.Component {
  state = {
    projects: []
  };

  componentDidMount() {
    axios.get("http://localhost:3000/projects").then(response => {
      //   console.log(response.data);
      this.setState({
        projects: response.data
      });
    });
  }

  displayProjects() {
    return this.state.projects.map(allProjects => {
      const handleDelete = () => {
        axios
          .delete(`http://localhost:3000/projects/delete/${allProjects._id}`)
          .then(data => {
            this.setState({
              projects: this.state.projects.filter(
                el => el._id !== allProjects._id
              )
            });
          })
          .catch(err => console.log(err));
      };
      return (
        <div>
          <Col span={4}>
            <Card
              style={{ width: 300 }}
              cover={
                <img
                  style={{ height: "100px" }}
                  src={allProjects.imageURL}
                  alt="image"
                />

              }
              actions={[
                <Icon type="setting" />,
                <Icon type="edit" />,
                <Icon type="ellipsis" />
              ]}
            >
             
              
                <div>
                <Link to={`/projects/${allProjects._id}`}><h3>{allProjects.name}</h3>    </Link>
                  <h5>{allProjects.tagline}</h5>
                  <h5>{allProjects.description}</h5>
                  <p>Created by: {allProjects.contributor}</p>
                  <p>{allProjects.montoInversion}</p>
                </div>
          

              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="hola"
              />
              <Icon type="twitter" />
              <Icon type="facebook" />
              <br />
              <button
                style={{
                  width: "100px",
                  height: "30px",
                  backgroundColor: "rgb(22, 183, 252)",
                  margin: "10px"
                }}
                onClick={handleDelete}
              >
                Delete
              </button>
            </Card>
            
          </Col>
        </div>
      );
    });
  }

  handleSearch(e) {
    axios
      .get(`http://localhost:3000/projects${e.target.value}`)
      .then(foundProjects => {
        this.setState({
          projects: foundProjects.data
        });
      });
  }
  render() {
    return (
      <div>
        <div>
          <input
            style={{
              width: "100%",
              textAlign: "center",
              backgroundColor: "rgba(0,0,0,0.1)",
              height: "50px"
            }}
            type="text"
            placeholder="Search for a proyect"
            onChange={e => {
              this.handleSearch(e);
            }}
          />
        </div>
        <Row type="flex" justify="center" align="middle">
          {this.displayProjects()}
        </Row>
      </div>
    );
  }
}

export default AllProjects;
