import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TabsComp from '../tabsComp/TabsComp';

export default function ModalComp({open , handleClose}) {
    const [isSelected, setIsSelected] = React.useState({});
    const [isDone, setIsDone] = React.useState(false);
    const butonArray=[
        {
            id:"1",
            title:"week1"
        },
        {
            id:"2",
            title:"week2"
        },
        {
            id:"3",
            title:"week3"
        },
        {
            id:"4",
            title:"week4"
        },
    ]
  

  const handleWeek = (e , item) => {
    // setOpen(true);
    setIsSelected(item)
    
  };
  const handleSelectedWeek = (e , item) => {
    // setOpen(true);
    
    if(isSelected){
        console.log("isSelected>>>", isSelected);
        setIsDone(true)
        
    }
   
    
  };

 

  return (
    <React.Fragment>
     
      <Dialog className='w-100'
        open={open}
        onClose={handleClose}
        // aria-labelledby="alert-dialog-title"
        // aria-describedby="alert-dialog-description"
      >
     
        <DialogContent  className='d-flex justify-content-between w-100'> 
     {butonArray?.map((item , index) =>{
        return(
            <div key={index} className='d-flex w-100'>
                <Button style={{backgroundColor:"#E5E5E5" , border:isSelected?.id === item?.id ? "1px solid blue" :""}} className='text-dark d-flex px-4' onClick={(e) => handleWeek( e , item)} >
            {item.title}
          </Button>
            </div>
        )
     })}
        </DialogContent>
        <DialogActions>
          <Button className=' d-flex px-4 text-white' style={{backgroundColor:"#002045" }} onClick={handleSelectedWeek} autoFocus>
            Save
          </Button>
          {/* {isDone && "lnkln" } */}
          <div className='d-none'>

          {isDone && <TabsComp weekName={isSelected} /> }
          </div>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
