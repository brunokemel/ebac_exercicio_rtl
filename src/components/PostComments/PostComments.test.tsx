import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve inserir dois comentários', () => {
        render(<PostComment/>);

        const campoComentario = screen.getByTestId('campo-comentario');
        const botaoComentar = screen.getByTestId('botao-comentar');

        fireEvent.change(campoComentario, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(botaoComentar);

        fireEvent.change(campoComentario, { target: { value: 'Segundo comentário' } });
        fireEvent.click(botaoComentar);

        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
    });
});