import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV';


const Container = styled.div`
  margin-bottom: 8px;
  color: ${props => (props.isDragging ? "white" : "black")};
  justify-content: center;
  align-items: flex-start;
  padding: 0 15px;
  min-height: 106px;
  border-radius: 10px;
  max-width: 311px;
   background: ${props => (props.isDragging  ? 'rgba(255, 59, 59, 0.15)' : 'white')}; 
  background: white;
  margin-top: 15px;
  box-shadow: 1px 2px 5px 0px rgba(138,138,138,0.33);
  font-family: arial ;

    
  .primary-details {
    display:flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 15px;
    font-weight: 400px;
    color: #7d7d7d;
    padding:0 0;
   
  }

  .secondary-details {
    display:flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 12px;
    font-weight: 400px;
    color: #7d7d7d;
    border-top:1px solid #f1f1f1;
    
  }
  .roundbg{
    border-radius:50%;
    width:40%;
  }
  .icon-p{
    padding: 0px 8px;

  }
   .priority{ 
   margin-right: 12px; 
   align-self: center;
    svg{
      width: 12px !important;
      height: 12px !important;
      margin-right: 12px; 
   margin-top: 2px; 
  } 
   } 
`;
const ratingChanged = (newRating) => {
  console.log(newRating);
};

export default class BoardTask extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided, snapshot) => (
          
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            <p></p>
            <div className="primary-details">
              <p>{this.props.task.name.title} {this.props.task.name.first} {this.props.task.name.last}</p>
              <p> {this.props.task.phone}</p>
            </div>
            <div className="secondary-details">
                <span className="priority">
                  {new Date(this.props.task.dob.date).toLocaleDateString('en-us', {
                    month: 'short',
                    day: '2-digit',
                  })}
                </span>
              <span className="priority">
              <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="far fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
            </span>
            <div><img className="roundbg" alt="" src={this.props.task.picture.thumbnail} name={this.props.task.name.name} size={16} /> 
            <span > <FontAwesomeIcon icon={faEllipsisV}  size="lg" className="icon-p" /></span> 
          </div>
              
            </div>
            
    
          </Container>


        )}
      </Draggable>
    );
  }
}
