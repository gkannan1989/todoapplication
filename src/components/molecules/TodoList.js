import React, { memo } from "react";
import PropTypes from 'prop-types';
import { List, Paper } from "@material-ui/core";
import TodoListItem from "./TodoListItem";
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
/**
 * Function represents the TodoList component
 * @memberOf components.TodoList
 * @function TodoList
 * @description It renders the right block such as list porition along with banner 
 * @param {object}   props - props of component that were given by parent todo list and banner
 * @return {jsx} - jsx component to show 
 * @example
 *   <TodoList
      items={todos}
      onItemMark={idx => markTodo(idx)}
      onItemRemove={idx => removeTodo(idx)} 
      banner={bannerObj}
      />
 */
const TodoList = memo(props => {
  const items = props.items.sort((a, b) => b.checked > a.checked ? -1 : 1);
  return (<>
    <ImageList rowHeight={180} >
          <ImageListItem cols={2} rows={1}>
             <ImageListItemBar
               title={props.banner && props.banner.title}
               subtitle={props.banner && props.banner.subTitle}
               position="bottom" 
               actionPosition="left" 
             />
           </ImageListItem> 
     </ImageList>  
     
     {items && items.length > 0 && (
       <Paper style={{ margin: 16, maxHeight: '600px', overflow: 'auto' }}>
         <List style={{ overflow: "none" }}>
           {items.map((todo, idx) => (
             <TodoListItem
               {...todo}
               key={`TodoItem.${idx}`}
               divider={idx !== items.length - 1}
               idx={idx}
               handleUpdateTodo={props.handleUpdateTodo}
               onButtonClick={() => props.onItemRemove(idx)}
               onCheckBoxToggle={() => props.onItemMark(idx)}
             />
           ))}
         </List>
       </Paper>
     )}
   </>
 )
});
/**
 * @memberOf components.TodoList
 * @name propTypes
 * @type {object}
 * @description defines prop types of TodoList
 * @property {object}         [items]   -  todo list
 * @property {object}         [onItemMark]   -  invoking a function to mark the item as completed
 * @property {object}         [onItemRemove]   -  invoking a function to remove the list item
 * @property {object}         [banner]   -  banner object along with text and banner
 */
TodoList.propTypes = { 
  items: PropTypes.array.isRequired,
  onItemMark: PropTypes.func.isRequired,
  onItemRemove: PropTypes.func.isRequired,
  banner:  PropTypes.object.isRequired
};

export default TodoList;
