import React, { Component } from 'react';
import Typography from 'material-ui/Typography';

class Welcome extends Component {
  render() {
    return (
      <div>
        <Typography variant="title" color="inherit" align="center" gutterBottom>
          Olá!
        </Typography>
        <Typography variant="body2" align="justify">
          Meu nome é Wilde, tenho 23 anos, atuo na área de desenvolvimento de sistemas de software, e sou um eterno estudante de tecnologia.
          Criei esta página como uma alternativa ao currículo clássico, e também para conter outros conteúdos extra, então sinta-se livre para navegar.
        </Typography>
      </div>
    );
  }
}

export default Welcome;