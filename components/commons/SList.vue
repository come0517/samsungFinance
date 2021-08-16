<template>
  <div>
    <v-subheader inset>Folders</v-subheader>

    <v-list-item
      v-for="folder in folders"
      :key="folder.title"
    >
      <v-list-item-avatar>
        <v-icon
          class="grey lighten-1"
          dark
        >
          mdi-folder
        </v-icon>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title v-text="folder.title"></v-list-item-title>

        <v-list-item-subtitle v-text="folder.subtitle"></v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-action>
        <v-btn icon>
          <v-icon color="grey lighten-1">mdi-information</v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
  </div>
</template>
