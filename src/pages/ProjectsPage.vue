<template>
  <div>
    <nav-bar/>

    <div id="container">
      <div>
        <h1>Our projects</h1>
        <div class="p-2">
          <h3>Project1</h3>
          <div class="p-2">
            <p>
              The organization implemented some activities in the beginning of
              the 2021 in partnership of some partners as well as the parents of
              the young ladies who are living with disabilities.
              Majority of those women were Deaf people and they are
              self-motivated to fight for their rights in terms of safe
              communication to the other normal people wherever they go in the
              society such as Hospitals, Markets. By developing their usual
              language called Dumb language.
            </p>

            <p>
              During that time, the organization in partnership with the parents
              and local government, they bought the sewing machine and other
              supporting materials for sewing in order to help them develop
              themselves but especially in focus of treating them
              psychologically by avoiding depression, reducing the stigma caused
              by their society, developing their self-esteem so that it will
              help them not to be in enclave situation and they feel that they
              have something great to do in the society and this is different to
              some of their family members or in their community where those
              people are taken as the people who are unable and weak.
            </p>

            <p>
              This project were implemented in order to relieve those forms of
              myths in the society as well as helping the target population of
              this project to feel comfortable mentally, in their communities
              and show their capacity throughout all those activities.
            </p>

            <p>
              This project were initiated but also it is still in progress and
              there are other activities that are not yet finished regarding the
              project as well as the organization visualize to expand their
              activities to other regions in Rwanda in order to support people
              living with disabilities preventing depression and major
              depression caused by their living conditions of disabilities. So,
              the organization is looking forward to welcoming any other
              volunteers and sponsors who can make contribution in order to run
              more projects for supporting those peoples who are vulnerable.
            </p>
          </div>
        </div>
      </div>
    </div>
    <footer-component />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import footerComponent from "@/components/footer.vue";

export default {
  name: "ProjectsPage",
  components: {
    NavBar,
    footerComponent,
  },
};
</script>

<style scoped>

h1 {
  color: coral;
}

</style>
