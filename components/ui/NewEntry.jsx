import { useContext, useState } from 'react';

import { Box, Button, TextField } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

import { EntriesContext } from '../../context/entries';
import { UIContext } from '../../context/ui';

export const NewEntry = () => {
  const { NewEntry } = useContext(EntriesContext);
  const { dispatch, isAdding } = useContext(UIContext);

  const [touched, setTouched] = useState(false);
  const [input, setInput] = useState('');

  const fieldHandler = (e) => {
    setInput(e.target.value);
  };

  const onSave = () => {
    if (input.length === 0) return;

    NewEntry(input);
    setTouched(false);
    setInput('');
    dispatch({ type: 'ISADDING', payload: false });
  };

  return (
    <Box sx={{ marginBottom: 3, paddingX: 2 }}>
      {isAdding ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder="Nueva entrada"
            autoFocus
            multiline
            label="Nueva Entrada"
            helperText="Ingrese un valor."
            error={input.length <= 0 && touched}
            onChange={fieldHandler}
            onBlur={() => setTouched(true)}
          />

          <Box display="flex" justifyContent="space-between">
            <Button
              variant="text"
              onClick={() =>
                dispatch(
                  { type: 'ISADDING', payload: false },
                  setTouched(false)
                )
              }
            >
              Cancelar
            </Button>

            <Button
              variant="outlined"
              color="secondary"
              endIcon={<SaveOutlinedIcon />}
              onClick={onSave}
            >
              Guardar
            </Button>
          </Box>
        </>
      ) : (
        <>
          <Button
            startIcon={<AddCircleOutlineOutlinedIcon />}
            fullWidth
            variant="outlined"
            onClick={() => dispatch({ type: 'ISADDING', payload: true })}
          >
            Agregar Tarea
          </Button>
        </>
      )}
    </Box>
  );
};
