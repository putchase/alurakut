
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import {AlurakutMenu, OrkutNostalgicIconSet} from '../src/libs/AluraCommons'
 import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(props) {
  console.log(props);
  return (
    <Box>
      <img src={`https://github.com/${props.githubUser}.png`} style = {{maxHeight: '150px'}} />
    </Box>
  );
}

export default function Home() {
  const githubUser = 'putchase';
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
        </div>
        
       <div className = "profileRelationsArea" style={{gridArea: "profileRelationsArea"}}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Amigos ({friends.length}) </h2>

            <ul>
              {friends.map((current) => {
                return (
                  <li>
                    <a href={`/users/${current}`} key={current} >
                      <img src={`https://github.com/${current}.png`} />
                      <span>{current}</span>
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
