import React from 'react';

export default function Label({label}){
    function hundel_colore_status(label){
        if(label=='in_progress'){
            return styles.labelContainer2
        }else if(label == 'finished'){
            return styles.labelContainer1
        }else if(label == 'cancelled'){
            return styles.labelContainer
        }
    }
  return (
    <div style={hundel_colore_status(label)}>
      {label}
    </div>
  );
};

const styles = {
  labelContainer: {
    display: 'inline-block',
    padding: '4px 12px',
    borderRadius: '16px',
    backgroundColor: '#2d1b1e', // Couleur de fond foncée
    color: '#ff8b8b', // Couleur du texte rose clair
    border: '1px solid #ff8b8b', // Bordure rose clair
    fontSize: '14px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  labelContainer1: {
    display: 'inline-block',
    padding: '4px 12px',
    borderRadius: '16px',
    backgroundColor: '#0d2727', // Couleur de fond foncée
    color: '#00e5e5', // Couleur du texte cyan
    border: '1px solid #00e5e5', // Bordure cyan
    fontSize: '14px',
    fontWeight: 'bold',
    textAlign: 'center'
    },

    labelContainer2: {
        display: 'inline-block',
        padding: '4px 12px',
        borderRadius: '16px',
        backgroundColor: '#0a1f33', // Couleur de fond bleu foncé
        color: '#3399ff', // Couleur du texte bleu clair
        border: '1px solid #3399ff', // Bordure bleu clair
        fontSize: '14px',
        fontWeight: 'bold',
        textAlign: 'center',
      },
};
