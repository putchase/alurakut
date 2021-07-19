import React from 'react';

import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import {AlurakutMenu, OrkutNostalgicIconSet, AlurakutProfileSidebarMenuDefault} from '../src/libs/AluraCommons'
 import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(props) {

  return (
    <Box>
      <img src={`https://github.com/${props.githubUser}.png`} style = {{maxHeight: '150px'}} />
      <hr />
      <p>
        <a className="boxLink" href={`https://github.com/${props.githubUser}`} >
          @{props.githubUser}
        </a>
      </p>
      <hr />
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
}

export default function Home() {
  const githubUser = 'putchase';
  const [community, setCommunity] = React.useState([{
    id: new Date().toISOString,
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg',
  }]);
  const friends = ['omariosouto', 'peas', 'putchase'];
  
  return (
    <>
      <AlurakutMenu/>
      <MainGrid>
        <div className = "profileArea" style={{gridArea: "profileArea"}}>
          <ProfileSidebar githubUser={githubUser} />
        </div>
  
        <div className = "welcomeArea" style={{gridArea: "welcomeArea"}}>
          <Box>
            <h1 className = "title">Bem Vindo</h1>
            <OrkutNostalgicIconSet/>
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={function handleCreateCommunity(e){
              e.preventDefault();
              const formData = new FormData(e.target);

              const communityData = { 
                id: new Date().toISOString,
                title: formData.get('title'),
                image: formData.get('image'),
              }
              
              setCommunity([...community, communityData]);
            }}>
              <div>
                <input placeholder="Qual vai ser o nome da sua comunidade?" 
                name="title" 
                aria-label="Qual vai ser o nome da sua comunidade?"
                type="text" />
              </div>

              <div>
                <input placeholder="URL da capa" 
                name="image" 
                aria-label="URL de capa"
                type="text" />
              </div>

              <button>
                Criar Comunidade
              </button>
            </form>  
          </Box>
        </div>
        
       <div className = "profileRelationsArea" style={{gridArea: "profileRelationsArea"}}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Amigos ({friends.length}) </h2>

            <ul>
              {friends.map((current) => {
                return (
                  <li key = {current}>
                    <a href={`/users/${current}`} key={current} >
                      <img src={`https://github.com/${current}.png`} />
                      <span>{current}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>

          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Comunidades ({community.length}) </h2>
            <ul>
              { community.map((current) => {
                return (
                  <li key = {current.id}>
                    <a href={`/users/${current.title}`} >
                      <img src={current.image} />
                      <span>{current.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>

       </div>
        
      </MainGrid>
    </>
  );
}
