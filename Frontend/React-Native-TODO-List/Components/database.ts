// @ts-nocheck

import React from "react";
import { openDatabase } from "expo-sqlite";

// DB starts here
const db = openDatabase(
  "TasksDB",
  () => {
    console.log("Database created!");
  },
  (err) => {
    console.log("Failed to created Db", err);
  }
);

const createTable = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "create table if not exists tasks (id integer primary key not null, todo text, strike text);",
      [],
      () => {
        console.log("table created");
      },
      (err) => {
        console.log("Error creating table"), err;
      }
    );
  });
};

const addTask = (task: any) => {
  db.transaction((tx) => {
    tx.executeSql(
      "insert into tasks (todo) values (?);",
      [task],
      () => {
        console.log("Inserted Successfully");
      },
      (err) => {
        console.log("Error With Insertion", err);
      }
    );
  });
};

const addStrike = (strike: any, task: any) => {
  db.transaction((tx) => {
    tx.executeSql(
      "update tasks set strike = ? where todo = ?;",
      [strike, task],
      () => {
        console.log("Inserted Strike Successfully");
      },
      (err) => {
        console.log("Error With Strike Insertion", err);
      }
    );
  });
};

const fetchTask = (stateFunction) => {
  db.transaction((tx) => {
    tx.executeSql(
      "SELECT * FROM tasks;",
      [],
      (tx, res) => {
        stateFunction(res.rows._array);
        console.log(res.rows._array);
      },
      () => {
        console.log("Fetched Successfully");
      },
      (err) => {
        console.log("Error With Fetching", err);
      }
    );
  });
};

const deleteTasks = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "DROP TABLE IF EXISTS tasks;",
      [],
      () => {
        console.log("tasks deleted");
      },
      (err) => {
        console.log("Error with deletion", err);
      }
    );
  });
};

export const database = {
  createTable,
  addTask,
  addStrike,
  fetchTask,
  deleteTasks,
};
