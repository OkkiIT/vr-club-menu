import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Wrapper,
  MenuContainer,
  AgeFilter,
  ButtonContainer,
  ToggleInput,
  ToggleLabel,
  LabelForToggle,
  GamesWrapper
} from './styled';
import { LinkButton } from '../../components';

const AllGamesPage = () => {
  const params = useParams();
  const [forKidsOnly, setForKidsOnly] = useState(false);
  return (
    <Wrapper>
      <MenuContainer>
        <ButtonContainer>
          <LinkButton to={'/'} />
        </ButtonContainer>
        <AgeFilter>
          <LabelForToggle>Для детей</LabelForToggle>
          <ToggleInput onChange={() => setForKidsOnly(!forKidsOnly)} type="checkbox" id="switch" />
          <ToggleLabel htmlFor="switch" />
        </AgeFilter>
      </MenuContainer>
      <GamesWrapper>
<h4>
  <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut culpa dolorem facilis fuga nulla quasi quo
    sapiente sit. Aliquid beatae et quas qui quibusdam quos reprehenderit sapiente sint, tempora?
  </div>
  <div>Accusamus distinctio ex inventore maiores maxime modi molestiae, optio provident quibusdam ratione similique ut
    veniam veritatis! Aperiam assumenda consequuntur cupiditate dignissimos dolore, ex, ipsa labore, obcaecati porro
    recusandae sunt voluptates.
  </div>
  <div>Adipisci autem blanditiis consequatur consequuntur deleniti eligendi eum exercitationem facilis fuga hic illum
    inventore itaque laboriosam mollitia nisi optio pariatur placeat porro possimus quo ratione rem reprehenderit soluta
    tempora, totam!
  </div>
  <div>A aperiam blanditiis culpa dolor dolorem dolores ea ex exercitationem expedita facere fuga ipsa iste laborum
    magnam minima molestiae nam, necessitatibus officiis pariatur, quam quos ratione recusandae repudiandae similique
    tempora!
  </div>
  <div>Accusamus alias amet at consequuntur debitis, ducimus eligendi eos ipsam laborum magnam nesciunt nisi nobis odit
    provident quaerat quam quas quidem quisquam rem reprehenderit repudiandae sint sit suscipit unde voluptatem.
  </div>
  <div>Accusantium distinctio eius error illo possimus suscipit voluptas. Amet beatae consequatur dignissimos dolores
    eos et fugiat illum labore, minus neque, numquam officiis placeat quis rerum soluta suscipit tempore? Dignissimos,
    mollitia?
  </div>
  <div>Asperiores consequatur dicta fuga fugiat inventore ipsum libero, molestias similique voluptas voluptatem! Ea
    eaque ipsa saepe? Consectetur dolor eos eum natus optio placeat quo quos sed sequi voluptatem? Error, quis.
  </div>
  <div>Ab aliquam architecto id iste laborum mollitia praesentium, quae quam, quas ratione repudiandae temporibus unde
    voluptas. Aspernatur consectetur dolorem enim eos, ex harum hic necessitatibus porro quod, rerum tempora temporibus?
  </div>
  <div>A aliquid deserunt dolor doloribus! Aliquam assumenda at earum, enim esse et eum excepturi expedita hic nam nihil
    non, numquam obcaecati provident quia quos sunt ut, vero voluptates voluptatum! Accusamus?
  </div>
  <div>Accusamus accusantium alias aspernatur autem consectetur culpa debitis, deserunt eaque earum exercitationem fuga
    illum in ipsa nemo omnis optio praesentium quasi qui quia sapiente similique, suscipit, temporibus unde ut
    voluptates?
  </div>
  <div>Impedit, libero saepe. Debitis ducimus itaque necessitatibus praesentium quis quisquam vel. Accusamus blanditiis
    eligendi ex fugit, illo illum natus perspiciatis. Ad dolorum expedita, fuga iure nostrum odit temporibus ut. Nemo?
  </div>
  <div>Exercitationem harum nam numquam quas repellendus voluptatem, voluptatum. Adipisci at consectetur distinctio hic
    iusto magni neque optio quaerat quasi, quibusdam quo quos repellat, sed sit suscipit? Ducimus ipsam porro tempore.
  </div>
  <div>Amet, blanditiis eaque eius eum expedita harum ipsum magni perspiciatis quam? Deleniti labore, nostrum.
    Accusantium exercitationem ipsa nisi officiis quis sapiente tempore temporibus? Fuga iure molestias optio sunt
    veniam voluptatum!
  </div>
  <div>Accusamus ad adipisci amet aperiam architecto aut commodi delectus esse iusto laborum magnam maiores minima natus
    necessitatibus nihil nobis odio omnis porro quidem repudiandae sed sequi, similique sint, velit, vitae.
  </div>
  <div>Eligendi eum fugiat harum mollitia nisi vitae voluptates! Accusamus adipisci aliquam dolor, ducimus eveniet harum
    iste iusto labore laborum magni maiores maxime minima modi quia quis sunt tempore temporibus unde?
  </div>
  <div>A ad aspernatur beatae consequatur consequuntur cupiditate deserunt dolor ea eaque enim ex, facere impedit
    laudantium libero molestias necessitatibus nobis, pariatur perspiciatis reiciendis saepe sed similique sit, tenetur
    velit voluptas.
  </div>
  <div>Aliquid, architecto consectetur deserunt dolor dolore dolorum enim esse eum iste magnam nulla officia rem sit
    suscipit temporibus? Ad adipisci corporis, deserunt harum odio voluptatibus! Accusamus doloribus impedit officiis
    quia.
  </div>
  <div>Accusamus adipisci aliquid assumenda blanditiis consectetur debitis delectus, dicta dolore dolores ea error
    eveniet ex expedita id itaque laboriosam modi, natus necessitatibus numquam, officiis perferendis perspiciatis
    placeat quas ullam veritatis.
  </div>
  <div>Aspernatur assumenda aut culpa cumque, cupiditate dolorem eos eveniet exercitationem expedita id inventore libero
    mollitia natus neque nostrum obcaecati odit officiis optio pariatur quas qui tempore veritatis voluptate!
    Asperiores, quibusdam.
  </div>
  <div>Culpa cupiditate, dolorum eligendi enim inventore minima quibusdam quo rem saepe sint tenetur, unde, voluptas?
    Accusamus aut excepturi itaque molestiae obcaecati odit perferendis quae quibusdam totam veritatis? Ad, consectetur
    dolorum?
  </div>
  <div>Ab dolore eligendi maiores. Amet aspernatur cupiditate distinctio dolore doloremque dolorum eligendi ex excepturi
    fugit illum maiores nulla optio placeat quas, reiciendis repudiandae, sapiente tempora tempore unde vel velit
    veritatis!
  </div>
  <div>Aspernatur, assumenda atque cumque ducimus expedita fuga illo rerum similique sit veritatis. Deleniti dicta
    nesciunt nostrum omnis quas. Aliquid asperiores deserunt dicta dolores illum, incidunt iste neque officiis omnis
    velit.
  </div>
  <div>Asperiores, cum, sint? Ad, dolor dolore dolorem fugit impedit libero natus officia repellat ut voluptate! Beatae
    distinctio excepturi exercitationem fuga iste laborum officia optio, perferendis quaerat, sit, ullam voluptatem
    voluptates.
  </div>
  <div>Accusantium amet architecto aspernatur blanditiis cum debitis dolor dolore eos exercitationem expedita facilis,
    impedit ipsam minima mollitia non obcaecati odio omnis porro quaerat qui quia quod, ratione sequi tempore ut.
  </div>
  <div>Alias dignissimos eaque eveniet laudantium, libero maiores maxime modi perferendis quasi quibusdam rem
    repellendus soluta, voluptatum. Fugiat iure labore modi tenetur vitae! Accusamus distinctio impedit neque officiis
    repellendus sit, sunt?
  </div>
  <div>Amet assumenda aut deserunt eum ipsum magni nam nesciunt, nobis, nulla recusandae, unde velit vitae voluptatum?
    Alias, animi atque eos et illo in ipsa mollitia possimus praesentium repudiandae sequi suscipit.
  </div>
  <div>Aliquam amet atque autem beatae commodi cum eos exercitationem fugiat hic illo in, incidunt iste itaque
    laboriosam nam perferendis perspiciatis, quasi quis, quisquam sint totam unde veritatis vitae? Culpa, neque?
  </div>
  <div>Aliquid aspernatur consequatur deserunt dicta earum, harum illo iste, nostrum odit pariatur perferendis placeat
    praesentium saepe sed sint tempora vel, voluptate voluptatum? Accusantium aperiam earum eveniet non numquam quae
    temporibus!
  </div>
  <div>Consectetur culpa, explicabo laboriosam natus quasi repellat ut? Aperiam asperiores, aut commodi debitis,
    dignissimos ea explicabo mollitia numquam pariatur quaerat quas quo quos ratione sapiente sequi sit sunt voluptate
    voluptatum.
  </div>
  <div>Autem consequatur doloremque hic nisi, pariatur quam veniam vero? Accusamus at deleniti eveniet facere impedit
    iusto maiores nesciunt numquam odit quasi quidem quisquam quos repellat repellendus tenetur vel voluptatem,
    voluptatum.
  </div></h4>
      </GamesWrapper>
    </Wrapper>
  );
};

export default AllGamesPage;
