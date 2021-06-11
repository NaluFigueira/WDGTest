import React from 'react';

import { CustomButton } from './styles';

function Button({title, onClick, loading, type}) {
  return (
    <CustomButton type={type} disabled={loading} onClick={onClick}>
        {loading ? "Carregando..." : title}
    </CustomButton>
  );
}

export default Button;