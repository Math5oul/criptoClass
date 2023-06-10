import { Tab } from "../interfaces/Tab.interface";
import { CeasarCipherComponent } from "../components/tabs/ceasear-cipher/ceasar-cipher.component";
import { VigenereCipherComponent } from "../components/tabs/vigenere-cipher/vigenere-cipher.component";
import { Sha256CipherComponent } from "../components/tabs/sha256-cipher/sha256-cipher.component";
import { SobreComponent } from "../components/sobre/sobre.component";

export const data : Tab[] = [
  {
    title: "Cifra de Cesar",
    component: CeasarCipherComponent,
    explain: `A cifra de César é um tipo de cifra de substituição, um dos métodos mais
  simples e conhecidos de criptografia. É chamada assim em homenagem a
  Júlio César, que a teria utilizado para comunicação com seus generais
  durante campanhas militares. A cifra de César opera deslocando cada
  letra do texto original em uma quantidade fixa de posições no alfabeto.
  Por exemplo, com um deslocamento de 3 posições, a letra "A" seria
  substituída pela letra "D", "B" seria substituída por "E", e assim por
  diante. Essa técnica de deslocamento é conhecida como cifra de
  substituição de deslocamento ou cifra de César com deslocamento fixo.`,
  ref: `https://wiki.imesec.ime.usp.br/books/ctf-starter-pack/page/cifra-de-c%C3%A9sar`
  },

  {
    title: "Cifra Vigenère",
    component: VigenereCipherComponent,
    explain: ` A cifra de Vigenère é um tipo de cifra polialfabética, que utiliza uma
série de cifras de César com diferentes deslocamentos ao longo do texto. É
uma evolução da cifra de César que busca superar a vulnerabilidade da
cifra de substituição simples. Ao contrário da cifra de César com
deslocamento fixo, na cifra de Vigenère, o deslocamento varia de acordo
com a posição da letra no texto e a correspondente letra da palavra-chave.
A palavra-chave é repetida ao longo do texto para criar uma sequência de
deslocamentos.`,
ref: `https://danieldonda.com/a-matematica-da-cifra-de-vigenere/`
  },

  {
    title: "SHA-256",
    component: Sha256CipherComponent,
    explain: `SHA-256 (Secure Hash Algorithm 256-bit) é uma função de hash criptográfica
que pertence à família das funções SHA-2. Ela recebe um input de qualquer
tamanho e produz uma saída fixa de 256 bits (32 bytes). Essa função de
hash é amplamente utilizada para garantir a integridade e a segurança dos
dados. <b>O código é único e irreversível, o que significa que não é possível
obter a entrada original a partir do código gerado.</b> A SHA-256 utiliza um
processo iterativo para calcular o valor hash. O input é dividido em
blocos de 512 bits, que são processados em uma série de etapas para gerar
o hash final. O algoritmo envolve uma combinação de operações lógicas e
aritméticas, incluindo rotações, deslocamentos, adições e funções
não-lineares. Uma das principais características da SHA-256 é sua
resistência a colisões. Isso significa que é extremamente improvável que
dois inputs diferentes produzam o mesmo hash de saída. Além disso, a
função de hash é projetada para ser determinística, ou seja, o mesmo input
sempre produzirá o mesmo hash de saída. A SHA-256 é amplamente utilizada
em diversos contextos de segurança, como assinaturas digitais,
autenticação de mensagens, armazenamento seguro de senhas, entre outros. É
considerada uma função de hash criptograficamente forte e é amplamente
adotada como um padrão confiável na indústria de segurança da informação.`,
ref: `https://blog.bitnovo.com/pt/o-que-e-o-algoritmo-sha-256-e-como-funciona/`
  },
  {title: "Sobre",
  component: SobreComponent,
  }
];
