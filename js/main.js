var DateTime = luxon.DateTime;

const { createApp } = Vue

createApp({
  data() {
    return {
      contacts: [
        {
          name: 'Michele',
          avatar: './img/avatar_1.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Hai portato a spasso il cane?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Ricordati di stendere i panni',
              status: 'sent'
            },
            {
              date: '10/01/2020 16:15:22',
              message: 'Tutto fatto!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Fabio',
          avatar: './img/avatar_2.jpg',
          visible: true,
          messages: [
            {
              date: '20/03/2020 16:30:00',
              message: 'Ciao come stai?',
              status: 'sent'
            },
            {
              date: '20/03/2020 16:30:55',
              message: 'Bene grazie! Stasera ci vediamo?',
              status: 'received'
            },
            {
              date: '20/03/2020 16:35:00',
              message: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Samuele',
          avatar: './img/avatar_3.jpg',
          visible: true,
          messages: [
            {
              date: '28/03/2020 10:10:40',
              message: 'La Marianna va in campagna',
              status: 'received'
            },
            {
              date: '28/03/2020 10:20:10',
              message: 'Sicuro di non aver sbagliato chat?',
              status: 'sent'
            },
            {
              date: '28/03/2020 16:15:22',
              message: 'Ah scusa!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Alessandro B.',
          avatar: './img/avatar_4.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Si, ma preferirei andare al cinema',
              status: 'received'
            }
          ],
        },
        {
          name: 'Alessandro L.',
          avatar: './img/avatar_5.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ricordati di chiamare la nonna',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Va bene, stasera la sento',
              status: 'received'
            }
          ],
        },
        {
          name: 'Claudia',
          avatar: './img/avatar_6.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao Claudia, hai novità?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Non ancora',
              status: 'received'
            },
            {
              date: '10/01/2020 15:51:00',
              message: 'Nessuna nuova, buona nuova',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Federico',
          avatar: './img/avatar_7.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Fai gli auguri a Martina che è il suo compleanno!',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Grazie per avermelo ricordato, le scrivo subito!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Davide',
          avatar: './img/avatar_8.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao, andiamo a mangiare la pizza stasera?',
              status: 'received'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:51:00',
              message: 'OK!!',
              status: 'received'
            }
          ],
        }
      ],

      randomAnswers:[
      'A caval donato non si guarda in bocca',
      'Do ut des',
      'Morto un papa se ne fa un altro.',
      'Non è tutto oro quel che luccica.',
      'Lontano dagli occhi, lontano dal cuore.',
      'Chi non risica non rosica.',
      'Chi semina vento raccoglie tempesta.'],
      selectedContact: 0,
      currentMessage:null,
      newMessage: "",
      inputFilter: "",
      currentDate: "",
      smallMenuisVisible: false,
      bigMenuisVisible: false,
      darkTheme: false,

    }
  },
  methods: {
    clickActiveContact(index){
        this.selectedContact = index;
        this.currentMessage = null;
        this.smallMenuisVisible = false;
    },
    pushMessage(){
      let controllo = this.newMessage.replace(/ /g, "");
      if(controllo.length > 0){

        this.currentDate = DateTime.now().setLocale('it').toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS	);
        const newObject = {
          date: this.currentDate,
          message: this.newMessage,
          status: 'sent'
        }
        this.contacts[this.selectedContact].messages.push(newObject);
        this.newMessage = '';
        setTimeout(() => {
          this.currentDate = DateTime.now().setLocale('it').toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS	);
          const newObject = {
            date: this.currentDate,
            message: this.randomAnswers[this.randomNumber(this.randomAnswers.length)],
            status: 'recived'
          }
          this.contacts[this.selectedContact].messages.push(newObject);
        }, 1000);
      }
    },
    filterArrayPerInput(){
      this.contacts.forEach(element => {
        if (element.name.toLowerCase().includes(this.inputFilter.toLowerCase())){
          element.visible = true;
        }else{
          element.visible = false;
        }
      })
      },
      onClickVisibleSmallMenu(index){
        this.currentMessage = index;
        this.smallMenuisVisible = !this.smallMenuisVisible;
      },
      onClickVisibleBigMenu(){
        this.bigMenuisVisible = !this.bigMenuisVisible;
      },
      deleteCurrentMessage(){
        this.contacts[this.selectedContact].messages.splice(this.currentMessage, 1);
        this.currentMessage = null;
        this.smallMenuisVisible = false;
      },
      deleteAllChat(){
        this.contacts[this.selectedContact].messages.splice(0, this.contacts[this.selectedContact].messages.length);
        this.bigMenuisVisible = false;
      },
      changeTheme(){
        this.darkTheme = !this.darkTheme;
        console.log(this.darkTheme)
      },
      randomNumber(max){
        return Math.floor(Math.random() * max);
      }
    }
}).mount('#app')


