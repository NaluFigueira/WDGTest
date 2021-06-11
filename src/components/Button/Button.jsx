import React from 'react';

import { CustomButton } from './styles';

function Button({title, onClick, loading, type, color}) {
  return (
    <CustomButton type={type} disabled={loading} onClick={onClick} color={color}>
        {loading ? "Carregando..." : title}
    </CustomButton>
  );
}

export default Button;