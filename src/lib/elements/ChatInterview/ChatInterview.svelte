<script lang="ts">
  // Mensajes de ejemplo para testing
  const sampleMessages: {
    type: 'question' | 'answer';
    avatar: string;
    content: string;
    image?: string;
  }[] = [
    {
      type: 'question',
      avatar: 'https://i.pravatar.cc/150?img=1',
      content: '¿Cuál es tu experiencia con el arte digital?',
      image: 'https://picsum.photos/400/300?random=1'
    },
    {
      type: 'answer',
      avatar: 'https://i.pravatar.cc/150?img=2',
      content: 'He trabajado con arte digital durante más de 5 años, especializándome en ilustración digital y diseño de NFTs. Mi trabajo se centra principalmente en la creación de piezas que combinan elementos tradicionales con tecnología moderna.',
      image: 'https://picsum.photos/400/300?random=2'
    },
    {
      type: 'question',
      avatar: 'https://i.pravatar.cc/150?img=1',
      content: '¿Qué herramientas utilizas principalmente en tu proceso creativo?'
    },
    {
      type: 'answer',
      avatar: 'https://i.pravatar.cc/150?img=2',
      content: 'Utilizo principalmente Procreate para iPad, Adobe Photoshop y Illustrator. También experimento con herramientas de IA como Midjourney y Stable Diffusion para generar ideas y conceptos iniciales.',
      image: 'https://picsum.photos/400/300?random=3'
    }
  ];

  let messages: {
    type: 'question' | 'answer';
    avatar: string;
    content: string;
    image?: string;
  }[] = sampleMessages;
</script>

<div class="snap-start h-screen max-h-screen flex flex-col justify-center items-center bg-white text-white">
  <div class="h-[85vh] w-full flex flex-col">
    <div class="flex-1 max-w-3xl mx-auto bg-color-black p-0 overflow-hidden rounded-10 shadow-black/20 shadow-md relative">
      <div class="font-roboto font-bold text-xs tracking-widest text-center w-full absolute top-0 left-0 flex items-center justify-center h-10 z-10 bg-color-black">
        <p>
          in conversation with alice scope
        </p>
      </div>
      <div class="overflow-y-auto h-full pt-14 px-5">
        {#each messages as message}
          <div class="flex items-end gap-4 mb-5 {message.type === 'answer' ? 'flex-row-reverse' : ''}">
            <div class="w-12 h-12 flex-shrink-0">
              <div class="w-full h-full rounded-[50%] overflow-hidden">
                <img 
                  src={message.avatar} 
                  alt="Avatar" 
                  class="w-full h-full object-cover ring-2 ring-gray-200/50"
                />
              </div>
            </div>
            <div class="max-w-[90%] p-6 rounded-xl border-[1px] border-white/10 rounded-20 {
              message.type === 'question' 
                ? 'bg-[#989898]/20 rounded-bl-0' 
                : 'bg-transparent rounded-br-0'
            }">
              <div class="mb-3">{message.content}</div>
              {#if message.image}
                <div class="mt-3">
                  <img 
                    src={message.image} 
                    alt="Message image" 
                    class="w-full rounded-lg"
                  />
                </div>
              {/if}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
