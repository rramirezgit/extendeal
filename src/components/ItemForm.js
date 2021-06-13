
import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  textArea: {
    height: '60px !important',
    overflow: 'hidden',
    margin: '0px',
    width: '100%',
  },
}));

const ItemForm = ({ onChange, onSubmit, formValues, error }) => {
  const classes = useStyles();

  return (
    <form className={classes.root} onSubmit={onSubmit}>

      <div>
        <TextField name="title" value={formValues.title} label="title" onChange={onChange} />
        <TextField name="image_src" value={formValues.image_src} label="URL imagen" onChange={onChange} />
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">currency</InputLabel>
          <Select
            name="currency"
            value={formValues.currency}
            labelId="demo-simple-select-label"
            id="demo-simple-select"           
            onChange={onChange}
          >
            <MenuItem value={"$"}>$</MenuItem>
            <MenuItem value={"U$D "}>U$D</MenuItem>
          </Select>
        </FormControl>
        <TextField value={formValues.price} type="number" name="price" label="price" onChange={onChange} />
        <br /><br />
        <InputLabel >features</InputLabel>
        <TextareaAutosize
          value={formValues.features}
          className={classes.textArea}
          rowsMax={6}
          name="features"
          onChange={onChange}
        />
        <br />
        <FormControlLabel
          control={
            <Switch
              checked={formValues.free_shipping}
              onChange={onChange}
              color="primary"
              name="free_shipping"
            />
          }
          label="Envio Gratis"
        />
      </div>
      <br />
      <Button type="submit" variant="contained" color="primary" disableElevation>
        guardar
      </Button>
    </form>
  );
}

export default ItemForm;