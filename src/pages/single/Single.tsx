import {
  SingleAvatar,
  SingleContainer,
  SingleContent,
  SingleDescription,
  SingleEdit,
  SingleImage,
  SingleImageEdit,
  SingleSeparator,
  SingleTitle,
  SingleUser,
  SingleUserName,
} from './styled-components';
import Edit from '@/assets/edit.png';
import Delete from '@/assets/delete.png';
import { Menu } from '@/components';

const Single = () => {
  return (
    <SingleContainer>
      <SingleContent>
        <SingleImage src="https://cdn.masmovil.es/embed/831f19d19879674c15654c5be671569965693/POST_musica.jpg?imagick=1&size=1000" />
        <SingleUser>
          <SingleAvatar src="https://d2qc4bb64nav1a.cloudfront.net/cdn/13/images/curso-online-de-como-leer-el-rostro-en-las-personas:-los-microgestos_l_primaria_1_1561117635.jpg" />
          <SingleSeparator>
            <SingleUserName>HEREDIA PABLO</SingleUserName>
            <SingleDescription>Lunes 16 de Febrero de 2022</SingleDescription>
            <SingleEdit>
              <SingleImageEdit src={Edit} alt="" />
              <SingleImageEdit onClick={() => {}} src={Delete} alt="" />
            </SingleEdit>
          </SingleSeparator>
        </SingleUser>
        <SingleTitle>What is Lorem Ipsum?</SingleTitle>
        <SingleDescription>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry s standard dummy text
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </SingleDescription>
      </SingleContent>
      <Menu />
    </SingleContainer>
  );
};

export default Single;
