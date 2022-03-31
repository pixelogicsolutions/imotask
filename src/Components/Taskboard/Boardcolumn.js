import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import BoardTask from "./BoardTask";


const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const TaskList = styled.div`
  min-height: 100px;
  display: flex;
  flex-direction: column;
  background:  rgba(138,138,138,0 );
  min-width: 341px;
  border-radius: 5px;
  padding: 15px 15px;
  margin-right: 25px;
  
`;

const TaskColumnStyles = styled.div`
  margin: 8px;
  display: flex;
  width: 100%;
  min-height: 80vh;
`;

const Title = styled.h3`
  color: #63777C;
  background: white;
  align-self: flex-start;
  box-shadow: 1px 2px 5px 0px rgba(138,138,138,0.33);
  padding: 18px 15px;
  border-radius: 8px;
  max-width: 311px;
  width:100%;
  font-family:arial;
  font-weight:600;
  font-size:18pz;
`;

// The InnerList is a PureComponent to prevent unnecessary
// render function calls when rendering a task.
class InnerList extends React.PureComponent {
  render() {
    return this.props.tasks.map((task, index) => (
      <BoardTask key={task.id} task={task} index={index} />
    ));
  }
}

export default class BoardColumn extends React.Component {

  

  render() {
    return (
      <Draggable draggableId={this.props.column.id} index={this.props.index}>
        {provided => (
          <Container {...provided.draggableProps} ref={provided.innerRef}>

            <Title  className={`note shadow-sm note-${this.props.column.title}`} {...provided.dragHandleProps}>
              {this.props.column.title} - {this.props.length}
        </Title>
            <Droppable droppableId={this.props.column.id} type="task">
              {(provided, snapshot) => (
                <TaskList
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  isDraggingOver={snapshot.isDraggingOver}
                >
                  <InnerList tasks={this.props.tasks} />
                </TaskList>
              )}
            </Droppable>
          </Container>
        )}
      </Draggable>
    );
  }
}
