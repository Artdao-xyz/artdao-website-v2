<script lang="ts">
  import type { ChatInterviewData } from '../../../data/Projects/Orb/ProjectChatInterview';

  export let data: ChatInterviewData;

  // Función para obtener un personaje por ID
  function getCharacter(characterId: string) {
    return data.characters.find(char => char.id === characterId);
  }

  // Función para verificar si hay múltiples autores diferentes
  function hasMultipleAuthors(): boolean {
    const authors = data.messages
      .filter(msg => getCharacter(msg.characterId)?.type === 'answer')
      .map(msg => getCharacter(msg.characterId)?.name)
      .filter(Boolean);
    const uniqueAuthors = [...new Set(authors)];
    return uniqueAuthors.length > 1;
  }

  const showAuthorNames = hasMultipleAuthors();

  // Función para procesar texto con saltos de línea
  function processText(text: string): string {
    return text.replace(/\n/g, '<br>');
  }
</script>

<div class="snap-start relative font-clash h-screen max-h-screen flex flex-col justify-center items-center text-white">
  <div class="absolute inset-0 bg-cover bg-center bg-no-repeat z-0">
      <img src="media/home/thumbnails/01-home-digital-matter.webp" alt="Background" class="h-full w-full object-cover">
  </div>
  <div class="h-[85vh] w-full flex flex-col relative z-10">
    <div class="flex-1 max-w-2xl mx-auto bg-color-black p-0 overflow-hidden rounded-[20px] shadow-[0px_4px_40px_0px_rgba(0,0,0,1.00)] relative">
      <div class="font-roboto font-bold text-xs tracking-widest text-center w-full absolute top-0 left-0 flex items-center justify-center h-10 z-10 bg-color-black">
        <p>
          in conversation with alice scope
        </p>
      </div>
      <div class="overflow-y-auto h-full pt-14 px-5">
        {#each data.messages as message, index}
          {@const character = getCharacter(message.characterId)}
          {#if character}
            <div class="flex items-end gap-4 mb-5 {character.type === 'answer' ? 'flex-row-reverse' : ''}">
              <div class="w-12 h-12 flex-shrink-0">
                <div class="w-full h-full rounded-[50%] overflow-hidden">
                  <img 
                    src={character.avatar} 
                    alt="Avatar" 
                    class="w-full h-full object-cover ring-2 ring-gray-200/50"
                  />
                </div>
              </div>
              <div class="max-w-[90%] {
                character.type === 'answer' ? 'flex flex-col items-end' : ''
              }">
                <div class="p-6 {
                  character.type === 'question' 
                    ? 'bg-[#989898]/20 rounded-[24px] rounded-bl-[0px]' 
                    : 'bg-transparent rounded-[24px] rounded-br-[0px] border-[1px] border-white/10'
                }">
                  {#if character.type === 'answer' && showAuthorNames}
                    <div class="text-[10px] font-roboto font-normal text-white mb-2">{character.name}</div>
                  {/if}
                  <div>{@html processText(message.content)}</div>
                </div>
              </div>
            </div>
          {/if}
          
          <!-- Imagen centrada después de cada mensaje -->
          {#if data.images[index]}
            <div class="flex justify-center mb-5">
              <img 
                src={data.images[index]} 
                alt="Conversation image" 
                class="max-w-[80%] rounded-lg"
              />
            </div>
          {/if}
        {/each}
      </div>
    </div>
  </div>
</div>
