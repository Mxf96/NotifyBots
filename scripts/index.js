document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".header").classList.add("visible");
  document.querySelector(".commands").classList.add("visible");

  const languageSelect = document.getElementById("language-select");

  languageSelect.addEventListener("change", function () {
    const lang = this.value;
    changeLanguage(lang);
  });
});

function changeLanguage(lang) {
  const texts = {
    en: {
      welcome: "Welcome to NotifyBot",
      tagline: "Invite NotifyBot to your server and stay notified!",
      invite: "Invite NotifyBot",
      commands: "Commands Offered by NotifyBot",
      setchannel: {
        title: "/setchannel :",
        usage: "Usage: /setchannel &lt;channel&gt;",
        description:
          "Configure the text channel for notifications. This command sets the specified text channel where the bot will send notifications about members joining or switching voice channels.",
      },
      setprotected: {
        title: "/setprotected :",
        usage:
          "Usage: /setprotected members: &lt;member1&gt; &lt;member2&gt; ...",
        description:
          "Configure the protected members. This command adds the specified members to the protected list. Protected members will not be automatically banned by the bot.",
      },
      addprotected: {
        title: "/addprotected :",
        usage:
          "Usage: /addprotected members: &lt;member1&gt; &lt;member2&gt; ...",
        description:
          "Add new members to the protected list. This command adds the specified members to the protected list. Protected members will not be automatically banned by the bot.",
      },
      removeprotected: {
        title: "/removeprotected :",
        usage:
          "Usage: /removeprotected members: &lt;member1&gt; &lt;member2&gt; ...",
        description:
          "Remove members from the protected list. This command removes the specified members from the protected list. If these members join the server and are not in the protected list, they will be automatically banned by the bot.",
      },
      mute: {
        title: "/mute :",
        usage: "Usage: /mute &lt;member&gt; &lt;duration&gt;",
        description:
          "Mute a member for a specific duration. This command mutes the specified member for the given duration.",
      },
      unmute: {
        title: "/unmute :",
        usage: "Usage: /unmute &lt;member&gt;",
        description:
          "Unmute a member. This command unmutes the specified member.",
      },
      purge: {
        title: "/purge :",
        usage: "Usage: /purge &lt;number&gt;",
        description:
          "Delete a specified number of messages. This command deletes the specified number of messages from the channel.",
      },
      headsandtails: {
        title: "/headsandtails :",
        usage: "Usage: /headsandtails",
        description:
          "Flip a coin. This command flips a coin and returns either 'Heads' or 'Tails'.",
      },
      rockpaperscissors: {
        title: "/rockpaperscissors :",
        usage: "Usage: /rockpaperscissors &lt;choice&gt;",
        description:
          "Play rock-paper-scissors. This command plays a game of rock-paper-scissors with the bot.",
      },
      attention: {
        title: "Attention to the Name :",
      },
    },
    fr: {
      welcome: "Bienvenue sur NotifyBot",
      tagline: "Invitez NotifyBot sur votre serveur et restez informé !",
      invite: "Inviter NotifyBot",
      commands: "Commandes offertes par NotifyBot",
      setchannel: {
        title: "/setchannel :",
        usage: "Usage : /setchannel &lt;channel&gt;",
        description:
          "Configurer le canal de texte pour les notifications. Cette commande définit le canal de texte spécifié où le bot enverra des notifications concernant les membres rejoignant ou changeant de canal vocal.",
      },
      setprotected: {
        title: "/setprotected :",
        usage:
          "Usage : /setprotected members : &lt;member1&gt; &lt;member2&gt; ...",
        description:
          "Configurer les membres protégés. Cette commande ajoute les membres spécifiés à la liste protégée. Les membres protégés ne seront pas automatiquement bannis par le bot.",
      },
      addprotected: {
        title: "/addprotected :",
        usage:
          "Usage : /addprotected members : &lt;member1&gt; &lt;member2&gt; ...",
        description:
          "Ajouter de nouveaux membres à la liste protégée. Cette commande ajoute les membres spécifiés à la liste protégée. Les membres protégés ne seront pas automatiquement bannis par le bot.",
      },
      removeprotected: {
        title: "/removeprotected :",
        usage:
          "Usage : /removeprotected members : &lt;member1&gt; &lt;member2&gt; ...",
        description:
          "Retirer des membres de la liste protégée. Cette commande retire les membres spécifiés de la liste protégée. Si ces membres rejoignent le serveur et ne sont pas dans la liste protégée, ils seront automatiquement bannis par le bot.",
      },
      mute: {
        title: "/mute :",
        usage: "Usage : /mute &lt;member&gt; &lt;duration&gt;",
        description:
          "Muter un membre pour une durée spécifique. Cette commande mute le membre spécifié pour la durée indiquée.",
      },
      unmute: {
        title: "/unmute :",
        usage: "Usage : /unmute &lt;member&gt;",
        description:
          "Démuter un membre. Cette commande démute le membre spécifié.",
      },
      purge: {
        title: "/purge :",
        usage: "Usage : /purge &lt;number&gt;",
        description:
          "Supprimer un nombre spécifié de messages. Cette commande supprime le nombre spécifié de messages du canal.",
      },
      headsandtails: {
        title: "/headsandtails :",
        usage: "Usage : /headsandtails",
        description:
          "Lancer une pièce. Cette commande lance une pièce et retourne soit 'Pile' soit 'Face'.",
      },
      rockpaperscissors: {
        title: "/rockpaperscissors :",
        usage: "Usage : /rockpaperscissors &lt;choice&gt;",
        description:
          "Jouer à pierre-feuille-ciseaux. Cette commande joue à pierre-feuille-ciseaux avec le bot.",
      },
      attention: {
        title: "Attention au Nom :",
      },
    },
  };

  document.querySelector(".title").innerText = texts[lang].welcome;
  document.querySelector(".tagline").innerText = texts[lang].tagline;
  document.querySelector(".invite-button").innerText = texts[lang].invite;
  document.querySelector(".commands h2").innerText = texts[lang].commands;

  const commandElements = document.querySelectorAll(".command");

  commandElements[0].querySelector("h3").innerHTML =
    texts[lang].attention.title;

  commandElements[1].querySelector("h3").innerHTML =
    texts[lang].setchannel.title;
  commandElements[1].querySelector("p").innerHTML = `
    <strong>${texts[lang].setchannel.usage}</strong><br />
    <strong>Description:</strong> ${texts[lang].setchannel.description}
  `;

  commandElements[2].querySelector("h3").innerHTML =
    texts[lang].setprotected.title;
  commandElements[2].querySelector("p").innerHTML = `
    <strong>${texts[lang].setprotected.usage}</strong><br />
    <strong>Description:</strong> ${texts[lang].setprotected.description}
  `;

  commandElements[3].querySelector("h3").innerHTML =
    texts[lang].addprotected.title;
  commandElements[3].querySelector("p").innerHTML = `
  <strong>${texts[lang].addprotected.usage}</strong><br />
  <strong>Description:</strong> ${texts[lang].addprotected.description}
`;

  commandElements[4].querySelector("h3").innerHTML =
    texts[lang].removeprotected.title;
  commandElements[4].querySelector("p").innerHTML = `
    <strong>${texts[lang].removeprotected.usage}</strong><br />
    <strong>Description:</strong> ${texts[lang].removeprotected.description}
  `;

  commandElements[5].querySelector("h3").innerHTML =
    texts[lang].mute.title;
  commandElements[5].querySelector("p").innerHTML = `
    <strong>${texts[lang].mute.usage}</strong><br />
    <strong>Description:</strong> ${texts[lang].mute.description}
  `;

  commandElements[6].querySelector("h3").innerHTML =
    texts[lang].unmute.title;
  commandElements[6].querySelector("p").innerHTML = `
    <strong>${texts[lang].unmute.usage}</strong><br />
    <strong>Description:</strong> ${texts[lang].unmute.description}
  `;

  commandElements[7].querySelector("h3").innerHTML =
    texts[lang].purge.title;
  commandElements[7].querySelector("p").innerHTML = `
    <strong>${texts[lang].purge.usage}</strong><br />
    <strong>Description:</strong> ${texts[lang].purge.description}
  `;

  commandElements[8].querySelector("h3").innerHTML =
    texts[lang].headsandtails.title;
  commandElements[8].querySelector("p").innerHTML = `
    <strong>${texts[lang].headsandtails.usage}</strong><br />
    <strong>Description:</strong> ${texts[lang].headsandtails.description}
  `;

  commandElements[9].querySelector("h3").innerHTML =
    texts[lang].rockpaperscissors.title;
  commandElements[9].querySelector("p").innerHTML = `
    <strong>${texts[lang].rockpaperscissors.usage}</strong><br />
    <strong>Description:</strong> ${texts[lang].rockpaperscissors.description}
  `;
}
