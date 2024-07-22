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
      removeprotected: {
        title: "/removeprotected :",
        usage:
          "Usage: /removeprotected members: &lt;member1&gt; &lt;member2&gt; ...",
        description:
          "Remove members from the protected list. This command removes the specified members from the protected list. If these members join the server and are not in the protected list, they will be automatically banned by the bot.",
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
      removeprotected: {
        title: "/removeprotected :",
        usage:
          "Usage : /removeprotected members : &lt;member1&gt; &lt;member2&gt; ...",
        description:
          "Retirer des membres de la liste protégée. Cette commande retire les membres spécifiés de la liste protégée. Si ces membres rejoignent le serveur et ne sont pas dans la liste protégée, ils seront automatiquement bannis par le bot.",
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
    texts[lang].setchannel.title;
  commandElements[0].querySelector("p").innerHTML = `
    <strong>${texts[lang].setchannel.usage}</strong><br />
    <strong>Description:</strong> ${texts[lang].setchannel.description}
  `;

  commandElements[1].querySelector("h3").innerHTML =
    texts[lang].setprotected.title;
  commandElements[1].querySelector("p").innerHTML = `
    <strong>${texts[lang].setprotected.usage}</strong><br />
    <strong>Description:</strong> ${texts[lang].setprotected.description}
  `;

  commandElements[2].querySelector("h3").innerHTML =
    texts[lang].removeprotected.title;
  commandElements[2].querySelector("p").innerHTML = `
    <strong>${texts[lang].removeprotected.usage}</strong><br />
    <strong>Description:</strong> ${texts[lang].removeprotected.description}
  `;

  commandElements[3].querySelector("h3").innerHTML =
    texts[lang].attention.title;
}
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
      removeprotected: {
        title: "/removeprotected :",
        usage:
          "Usage: /removeprotected members: &lt;member1&gt; &lt;member2&gt; ...",
        description:
          "Remove members from the protected list. This command removes the specified members from the protected list. If these members join the server and are not in the protected list, they will be automatically banned by the bot.",
      },
      addprotected: {
        title: "/addprotected :",
        usage:
          "Usage: /addprotected members: &lt;member1&gt; &lt;member2&gt; ...",
        description:
          "Add new members to the protected list. This command adds the specified members to the protected list. Protected members will not be automatically banned by the bot.",
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
      removeprotected: {
        title: "/removeprotected :",
        usage:
          "Usage : /removeprotected members : &lt;member1&gt; &lt;member2&gt; ...",
        description:
          "Retirer des membres de la liste protégée. Cette commande retire les membres spécifiés de la liste protégée. Si ces membres rejoignent le serveur et ne sont pas dans la liste protégée, ils seront automatiquement bannis par le bot.",
      },
      addprotected: {
        title: "/addprotected :",
        usage:
          "Usage : /addprotected members : &lt;member1&gt; &lt;member2&gt; ...",
        description:
          "Ajouter de nouveaux membres à la liste protégée. Cette commande ajoute les membres spécifiés à la liste protégée. Les membres protégés ne seront pas automatiquement bannis par le bot.",
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
    texts[lang].setchannel.title;
  commandElements[0].querySelector("p").innerHTML = `
    <strong>${texts[lang].setchannel.usage}</strong><br />
    <strong>Description:</strong> ${texts[lang].setchannel.description}
  `;

  commandElements[1].querySelector("h3").innerHTML =
    texts[lang].setprotected.title;
  commandElements[1].querySelector("p").innerHTML = `
    <strong>${texts[lang].setprotected.usage}</strong><br />
    <strong>Description:</strong> ${texts[lang].setprotected.description}
  `;

  commandElements[2].querySelector("h3").innerHTML =
    texts[lang].removeprotected.title;
  commandElements[2].querySelector("p").innerHTML = `
    <strong>${texts[lang].removeprotected.usage}</strong><br />
    <strong>Description:</strong> ${texts[lang].removeprotected.description}
  `;

  commandElements[3].querySelector("h3").innerHTML =
    texts[lang].addprotected.title;
  commandElements[3].querySelector("p").innerHTML = `
    <strong>${texts[lang].addprotected.usage}</strong><br />
    <strong>Description:</strong> ${texts[lang].addprotected.description}
  `;

  commandElements[4].querySelector("h3").innerHTML =
    texts[lang].attention.title;
}