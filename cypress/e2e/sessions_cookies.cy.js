//Testavimo uzduotis - svetaines prisijungimas ir registracija
//1.testuoti pacia registracija. Ar galima uzsiregistruoti?
//2. pati prisijungima. Ar galima prisijungti?
//3. Integracinis testas: Ar uzsiregistravus galima prisijungti?
//4. musu rasomas testas tures buti prisijunges prie svetaines, atsiminti kad jis yra prisijunges
//5. Kaip tas pats funkcionalumas yra atvaizduojamas prisijungusiam ir neprisijungusiam vartotojui

//Prisijungimo atsiminmas(sesijos isaugojimas)
//Sesija - serverio atminties vieta, kur svetainė gali išsaugoti informaciją
//Cookie - vieta vartotojo kompiuteryje, kur svetainė gali išsaugoti informaciją

//Kokią info saugau sesijoje? jautrūs duomenys - slaptažodis, prisijungimo vardas, prisijungimo tokenas, asmens informacija...
//Kokią info saugau cookie? viską, išskyrūs jautrią informaciją

//abiem galima nustatyti laiką, kiek jie egzistuoja has context menu

describe("To Do List James funkcionalumas", () => {
  context("Cookies", () => {
    it("Ar svetaine leidzia sukurti cookies?", () => {
      cy.visit("https://todolist.james.am/#/");
      cy.setCookie("test", "test");
      cy.getCookie("test").should("exist");
    });

    //Uzduotis: Ar informacija isisaugo po svetainės persikrovimo?
    //1. Uzeiti i svetaine
    //2. Sukurti informacini sausainiuka(JSON masyvas tekstiniame formate, kazkoks skaicius, tekstas ir t.t)
    //3. Sukurti kelis sausiuniukus
    //3.1 Sausainiuku informacija yra surasoma i div arba i ul ir .t.t
    //4. Perkrauti svetaine
    //5. Patikrinti ar sausainiukai isliko po perkrovimo

    it("Ar informacija issisaugo po svetaines perkrovimo?", () => {
      cy.visit("https://todolist.james.am/#/");

      //set - nustatyti
      cy.setCookie("test", "1");
      cy.setCookie("test1", "test1");
      cy.setCookie("test2", "{user: bebras}");

      //puslapio perkrovimas
      cy.reload();

      //get - gauti
      cy.getCookie("test").should("exist");
      cy.getCookie("test1").should("exist");
      cy.getCookie("test2").should("exist");

      //gaunami visi cookies
      cy.getAllCookies().should("exist");

      //patikrinti cookie reiksmes
      cy.getCookie("test").should("have.property", "value", "1");
      cy.getCookie("test1").should("have.property", "value", "test1");
      cy.getCookie("test2").should("have.property", "value", "{user: bebras}");

      //cookies istrinimas rankiniu budu
      cy.clearCookies();
      // cy.clearCookie('test)
      cy.getCookie("test").should("be.null");
      cy.getCookie("test1").should("be.null");
      cy.getCookie("test2").should("be.null");
    });

    //Cookie testas veikia tik vienoje funkcijoje, i kita nepersiduoda
    it("Ar randami cookies?", () => {
      cy.visit("https://todolist.james.am/#/");
      cy.getCookie("test").should("exist");
      cy.getCookie("test1").should("exist");
      cy.getCookie("test2").should("exist");
    });
  });
});
