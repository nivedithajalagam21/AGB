export const leaderboardData = [
  {
    section: "Homophily Results",
    dataset: "CORA",
    victim: "GCN",
    setting: "Evasion",
    entries: [
      {
        method: "L1D-RND",
        budget1: { mean: "13.20", std: "4.33" },
        budget2: { mean: "22.53", std: "6.95" },
        budget3: { mean: "29.20", std: "5.60" },
        budget4: { mean: "32.93", std: "6.67" },
        budget5: { mean: "32.13", std: "5.04" },
        attackTime: ""
      },
      {
        method: "FGA",
        budget1: { mean: "27.87", std: "3.74" },
        budget2: { mean: "46.13", std: "7.03" },
        budget3: { mean: "55.73", std: "4.33" },
        budget4: { mean: "60.93", std: "5.06" },
        budget5: { mean: "64.67", std: "4.76" },
        attackTime: ""
      },
      {
        method: "Nettack",
        budget1: { mean: "29.60", std: "5.19" },
        budget2: { mean: "49.60", std: "5.77" },
        budget3: { mean: "56.80", std: "4.52" },
        budget4: { mean: "62.13", std: "4.17" },
        budget5: { mean: "63.73", std: "3.99" },
        attackTime: ""
      },
      {
        method: "PGD",
        budget1: { mean: "29.33", std: "4.12" },
        budget2: { mean: "48.00", std: "5.24" },
        budget3: { mean: "54.93", std: "3.28" },
        budget4: { mean: "59.60", std: "4.36" },
        budget5: { mean: "59.20", std: "5.49" },
        attackTime: ""
      },
      {
        method: "PR-BCD",
        budget1: { mean: "32.13", std: "3.50" },
        budget2: { mean: "53.87", std: "4.44" },
        budget3: { mean: "59.20", std: "2.81" },
        budget4: { mean: "63.20", std: "3.36" },
        budget5: { mean: "65.73", std: "3.92" },
        attackTime: ""
      },
      {
        method: "SGA",
        budget1: { mean: "26.27", std: "3.69" },
        budget2: { mean: "44.67", std: "7.58" },
        budget3: { mean: "55.33", std: "4.88" },
        budget4: { mean: "58.13", std: "3.81" },
        budget5: { mean: "60.67", std: "5.00" },
        attackTime: ""
      },
      {
        method: "GOttack",
        budget1: { mean: "28.53", std: "4.37" },
        budget2: { mean: "49.33", std: "6.83" },
        budget3: { mean: "56.13", std: "5.26" },
        budget4: { mean: "60.53", std: "6.12" },
        budget5: { mean: "62.13", std: "4.87" },
        attackTime: ""
      }
    ]
  },
  {
    section: "Homophily Results",
    dataset: "CORA",
    victim: "GCN",
    setting: "Poisoning",
    entries: [
      {
        method: "L1D-RND",
        budget1: { mean: "15.47", std: "4.03" },
        budget2: { mean: "23.33", std: "6.79" },
        budget3: { mean: "30.27", std: "6.18" },
        budget4: { mean: "33.47", std: "7.03" },
        budget5: { mean: "34.67", std: "6.87" },
        attackTime: ""
      },
      {
        method: "FGA",
        budget1: { mean: "30.00", std: "5.61" },
        budget2: { mean: "50.00", std: "4.78" },
        budget3: { mean: "56.27", std: "4.13" },
        budget4: { mean: "60.53", std: "4.37" },
        budget5: { mean: "65.07", std: "4.77" },
        attackTime: ""
      },
      {
        method: "Nettack",
        budget1: { mean: "33.47", std: "3.58" },
        budget2: { mean: "51.87", std: "4.56" },
        budget3: { mean: "58.67", std: "2.69" },
        budget4: { mean: "62.13", std: "3.66" },
        budget5: { mean: "63.07", std: "3.10" },
        attackTime: ""
      },
      {
        method: "PGD",
        budget1: { mean: "31.73", std: "3.69" },
        budget2: { mean: "48.80", std: "4.59" },
        budget3: { mean: "55.60", std: "2.95" },
        budget4: { mean: "59.33", std: "2.89" },
        budget5: { mean: "58.53", std: "4.87" },
        attackTime: ""
      },
      {
        method: "PR-BCD",
        budget1: { mean: "32.80", std: "6.04" },
        budget2: { mean: "53.87", std: "3.66" },
        budget3: { mean: "57.60", std: "3.31" },
        budget4: { mean: "60.67", std: "3.52" },
        budget5: { mean: "63.73", std: "3.28" },
        attackTime: ""
      },
      {
        method: "SGA",
        budget1: { mean: "29.33", std: "3.83" },
        budget2: { mean: "48.13", std: "6.48" },
        budget3: { mean: "55.87", std: "3.81" },
        budget4: { mean: "60.00", std: "2.73" },
        budget5: { mean: "63.73", std: "4.46" },
        attackTime: ""
      },
      {
        method: "GOttack",
        budget1: { mean: "33.33", std: "7.20" },
        budget2: { mean: "51.47", std: "6.65" },
        budget3: { mean: "57.73", std: "5.18" },
        budget4: { mean: "61.07", std: "3.92" },
        budget5: { mean: "63.20", std: "3.84" },
        attackTime: ""
      }
    ]
  },
  {
    section: "Homophily Results",
    dataset: "CORA",
    victim: "GNNGuard",
    setting: "Evasion",
    entries: [
      {
        method: "L1D-RND",
        budget1: { mean: "6.27", std: "4.13" },
        budget2: { mean: "9.73", std: "5.60" },
        budget3: { mean: "11.73", std: "4.83" },
        budget4: { mean: "17.20", std: "5.44" },
        budget5: { mean: "18.67", std: "6.13" },
        attackTime: ""
      },
      {
        method: "FGA",
        budget1: { mean: "6.67", std: "3.44" },
        budget2: { mean: "11.87", std: "4.37" },
        budget3: { mean: "14.93", std: "4.71" },
        budget4: { mean: "17.20", std: "4.71" },
        budget5: { mean: "22.13", std: "6.21" },
        attackTime: ""
      },
      {
        method: "Nettack",
        budget1: { mean: "6.80", std: "4.77" },
        budget2: { mean: "13.07", std: "5.01" },
        budget3: { mean: "16.93", std: "6.54" },
        budget4: { mean: "20.40", std: "6.68" },
        budget5: { mean: "25.07", std: "6.45" },
        attackTime: ""
      },
      {
        method: "PGD",
        budget1: { mean: "6.80", std: "2.60" },
        budget2: { mean: "11.33", std: "4.82" },
        budget3: { mean: "16.80", std: "5.28" },
        budget4: { mean: "20.40", std: "5.08" },
        budget5: { mean: "21.07", std: "4.95" },
        attackTime: ""
      },
      {
        method: "PR-BCD",
        budget1: { mean: "8.13", std: "3.34" },
        budget2: { mean: "13.33", std: "3.98" },
        budget3: { mean: "15.60", std: "4.67" },
        budget4: { mean: "17.47", std: "3.81" },
        budget5: { mean: "22.80", std: "6.13" },
        attackTime: ""
      },
      {
        method: "SGA",
        budget1: { mean: "8.40", std: "4.29" },
        budget2: { mean: "12.80", std: "3.28" },
        budget3: { mean: "18.53", std: "5.04" },
        budget4: { mean: "21.07", std: "4.53" },
        budget5: { mean: "22.53", std: "5.53" },
        attackTime: ""
      },
      {
        method: "GOttack",
        budget1: { mean: "8.40", std: "4.97" },
        budget2: { mean: "13.20", std: "4.33" },
        budget3: { mean: "17.20", std: "4.59" },
        budget4: { mean: "19.20", std: "4.89" },
        budget5: { mean: "23.20", std: "5.89" },
        attackTime: ""
      }
    ]
  },
  {
    section: "Homophily Results",
    dataset: "CORA",
    victim: "GNNGuard",
    setting: "Poisoning",
    entries: [
      {
        method: "L1D-RND",
        budget1: { mean: "6.93", std: "4.40" },
        budget2: { mean: "10.40", std: "5.14" },
        budget3: { mean: "12.80", std: "3.76" },
        budget4: { mean: "18.00", std: "4.90" },
        budget5: { mean: "19.47", std: "5.88" },
        attackTime: ""
      },
      {
        method: "FGA",
        budget1: { mean: "7.47", std: "3.96" },
        budget2: { mean: "12.53", std: "4.50" },
        budget3: { mean: "16.80", std: "4.89" },
        budget4: { mean: "19.20", std: "4.65" },
        budget5: { mean: "24.80", std: "5.60" },
        attackTime: ""
      },
      {
        method: "Nettack",
        budget1: { mean: "7.47", std: "5.37" },
        budget2: { mean: "14.93", std: "5.55" },
        budget3: { mean: "19.20", std: "6.67" },
        budget4: { mean: "22.13", std: "6.30" },
        budget5: { mean: "28.40", std: "5.87" },
        attackTime: ""
      },
      {
        method: "PGD",
        budget1: { mean: "6.93", std: "3.01" },
        budget2: { mean: "12.40", std: "5.08" },
        budget3: { mean: "17.47", std: "5.10" },
        budget4: { mean: "21.07", std: "5.39" },
        budget5: { mean: "22.00", std: "5.81" },
        attackTime: ""
      },
      {
        method: "PR-BCD",
        budget1: { mean: "8.93", std: "3.99" },
        budget2: { mean: "14.00", std: "4.07" },
        budget3: { mean: "17.07", std: "5.75" },
        budget4: { mean: "19.07", std: "3.99" },
        budget5: { mean: "23.87", std: "7.27" },
        attackTime: ""
      },
      {
        method: "SGA",
        budget1: { mean: "9.60", std: "3.64" },
        budget2: { mean: "15.33", std: "3.75" },
        budget3: { mean: "20.80", std: "5.89" },
        budget4: { mean: "25.07", std: "5.95" },
        budget5: { mean: "28.13", std: "7.11" },
        attackTime: ""
      },
      {
        method: "GOttack",
        budget1: { mean: "10.27", std: "6.54" },
        budget2: { mean: "15.07", std: "5.01" },
        budget3: { mean: "19.07", std: "4.27" },
        budget4: { mean: "22.27", std: "6.18" },
        budget5: { mean: "26.13", std: "5.78" },
        attackTime: ""
      }
    ]
  },
  {
    section: "Homophily Results",
    dataset: "CITESEER",
    victim: "GCN",
    setting: "Evasion",
    entries: [
      {
        method: "L1D-RND",
        budget1: { mean: "15.20", std: "4.20" },
        budget2: { mean: "28.67", std: "12.39" },
        budget3: { mean: "36.53", std: "9.09" },
        budget4: { mean: "37.73", std: "9.44" },
        budget5: { mean: "42.13", std: "7.11" },
        attackTime: ""
      },
      {
        method: "FGA",
        budget1: { mean: "25.47", std: "4.10" },
        budget2: { mean: "36.00", std: "8.18" },
        budget3: { mean: "50.27", std: "5.90" },
        budget4: { mean: "56.53", std: "2.97" },
        budget5: { mean: "58.27", std: "4.27" },
        attackTime: ""
      },
      {
        method: "Nettack",
        budget1: { mean: "28.13", std: "7.15" },
        budget2: { mean: "45.33", std: "9.06" },
        budget3: { mean: "49.87", std: "9.61" },
        budget4: { mean: "58.93", std: "5.85" },
        budget5: { mean: "59.73", std: "3.92" },
        attackTime: ""
      },
      {
        method: "PGD",
        budget1: { mean: "25.47", std: "4.87" },
        budget2: { mean: "40.27", std: "7.55" },
        budget3: { mean: "48.13", std: "7.23" },
        budget4: { mean: "52.27", std: "7.28" },
        budget5: { mean: "55.47", std: "5.15" },
        attackTime: ""
      },
      {
        method: "PR-BCD",
        budget1: { mean: "34.53", std: "6.82" },
        budget2: { mean: "54.67", std: "5.05" },
        budget3: { mean: "60.40", std: "4.42" },
        budget4: { mean: "64.67", std: "5.16" },
        budget5: { mean: "65.87", std: "4.17" },
        attackTime: ""
      },
      {
        method: "SGA",
        budget1: { mean: "23.47", std: "2.77" },
        budget2: { mean: "35.87", std: "6.07" },
        budget3: { mean: "47.47", std: "4.31" },
        budget4: { mean: "51.07", std: "4.95" },
        budget5: { mean: "53.73", std: "3.99" },
        attackTime: ""
      },
      {
        method: "GOttack",
        budget1: { mean: "25.60", std: "4.22" },
        budget2: { mean: "39.33", std: "9.03" },
        budget3: { mean: "51.60", std: "6.10" },
        budget4: { mean: "57.33", std: "4.82" },
        budget5: { mean: "56.80", std: "7.40" },
        attackTime: ""
      }
    ]
  },
  {
    section: "Homophily Results",
    dataset: "CITESEER",
    victim: "GCN",
    setting: "Poisoning",
    entries: [
      {
        method: "L1D-RND",
        budget1: { mean: "16.27", std: "4.33" },
        budget2: { mean: "29.87", std: "12.77" },
        budget3: { mean: "37.73", std: "9.56" },
        budget4: { mean: "40.13", std: "9.12" },
        budget5: { mean: "42.93", std: "6.04" },
        attackTime: ""
      },
      {
        method: "FGA",
        budget1: { mean: "31.87", std: "7.39" },
        budget2: { mean: "49.87", std: "3.81" },
        budget3: { mean: "56.67", std: "5.43" },
        budget4: { mean: "60.13", std: "5.83" },
        budget5: { mean: "63.73", std: "5.39" },
        attackTime: ""
      },
      {
        method: "Nettack",
        budget1: { mean: "36.40", std: "6.51" },
        budget2: { mean: "51.73", std: "7.52" },
        budget3: { mean: "55.87", std: "10.38" },
        budget4: { mean: "62.27", std: "5.65" },
        budget5: { mean: "63.33", std: "5.43" },
        attackTime: ""
      },
      {
        method: "PGD",
        budget1: { mean: "30.80", std: "6.79" },
        budget2: { mean: "45.87", std: "5.83" },
        budget3: { mean: "51.73", std: "9.56" },
        budget4: { mean: "56.27", std: "3.53" },
        budget5: { mean: "57.73", std: "5.50" },
        attackTime: ""
      },
      {
        method: "PR-BCD",
        budget1: { mean: "34.27", std: "6.32" },
        budget2: { mean: "52.40", std: "3.64" },
        budget3: { mean: "57.87", std: "5.42" },
        budget4: { mean: "62.40", std: "4.73" },
        budget5: { mean: "63.73", std: "3.84" },
        attackTime: ""
      },
      {
        method: "SGA",
        budget1: { mean: "25.20", std: "3.61" },
        budget2: { mean: "44.13", std: "4.93" },
        budget3: { mean: "53.20", std: "4.52" },
        budget4: { mean: "54.53", std: "4.10" },
        budget5: { mean: "60.27", std: "4.77" },
        attackTime: ""
      },
      {
        method: "GOttack",
        budget1: { mean: "34.27", std: "8.38" },
        budget2: { mean: "48.40", std: "6.77" },
        budget3: { mean: "57.87", std: "4.63" },
        budget4: { mean: "59.33", std: "4.82" },
        budget5: { mean: "62.00", std: "6.09" },
        attackTime: ""
      }
    ]
  },
  {
    section: "Homophily Results",
    dataset: "CITESEER",
    victim: "GNNGuard",
    setting: "Evasion",
    entries: [
      {
        method: "L1D-RND",
        budget1: { mean: "4.67", std: "3.68" },
        budget2: { mean: "7.60", std: "5.46" },
        budget3: { mean: "9.60", std: "5.30" },
        budget4: { mean: "10.53", std: "5.10" },
        budget5: { mean: "11.07", std: "5.18" },
        attackTime: ""
      },
      {
        method: "FGA",
        budget1: { mean: "3.33", std: "3.18" },
        budget2: { mean: "6.93", std: "3.69" },
        budget3: { mean: "9.07", std: "4.06" },
        budget4: { mean: "13.33", std: "5.16" },
        budget5: { mean: "13.07", std: "6.04" },
        attackTime: ""
      },
      {
        method: "Nettack",
        budget1: { mean: "4.67", std: "2.35" },
        budget2: { mean: "9.73", std: "4.27" },
        budget3: { mean: "13.47", std: "5.93" },
        budget4: { mean: "17.07", std: "5.12" },
        budget5: { mean: "20.53", std: "5.78" },
        attackTime: ""
      },
      {
        method: "PGD",
        budget1: { mean: "3.07", std: "2.49" },
        budget2: { mean: "5.33", std: "3.27" },
        budget3: { mean: "8.80", std: "4.77" },
        budget4: { mean: "11.60", std: "3.72" },
        budget5: { mean: "13.07", std: "4.46" },
        attackTime: ""
      },
      {
        method: "PR-BCD",
        budget1: { mean: "3.07", std: "2.12" },
        budget2: { mean: "6.53", std: "2.33" },
        budget3: { mean: "8.93", std: "3.20" },
        budget4: { mean: "11.07", std: "4.40" },
        budget5: { mean: "15.07", std: "5.23" },
        attackTime: ""
      },
      {
        method: "SGA",
        budget1: { mean: "4.00", std: "2.73" },
        budget2: { mean: "8.00", std: "5.81" },
        budget3: { mean: "10.13", std: "4.56" },
        budget4: { mean: "13.20", std: "5.06" },
        budget5: { mean: "14.40", std: "4.08" },
        attackTime: ""
      },
      {
        method: "GOttack",
        budget1: { mean: "4.67", std: "2.89" },
        budget2: { mean: "6.80", std: "4.77" },
        budget3: { mean: "10.13", std: "4.56" },
        budget4: { mean: "13.20", std: "5.17" },
        budget5: { mean: "15.87", std: "3.81" },
        attackTime: ""
      }
    ]
  },
  {
    section: "Homophily Results",
    dataset: "CITESEER",
    victim: "GNNGuard",
    setting: "Poisoning",
    entries: [
      {
        method: "L1D-RND",
        budget1: { mean: "4.80", std: "3.84" },
        budget2: { mean: "7.87", std: "5.53" },
        budget3: { mean: "9.87", std: "5.21" },
        budget4: { mean: "10.53", std: "4.93" },
        budget5: { mean: "11.47", std: "4.69" },
        attackTime: ""
      },
      {
        method: "FGA",
        budget1: { mean: "4.40", std: "3.31" },
        budget2: { mean: "9.07", std: "3.77" },
        budget3: { mean: "10.93", std: "3.61" },
        budget4: { mean: "14.40", std: "4.61" },
        budget5: { mean: "14.27", std: "6.13" },
        attackTime: ""
      },
      {
        method: "Nettack",
        budget1: { mean: "6.00", std: "2.93" },
        budget2: { mean: "10.53", std: "4.24" },
        budget3: { mean: "14.67", std: "6.03" },
        budget4: { mean: "19.33", std: "6.62" },
        budget5: { mean: "22.53", std: "5.83" },
        attackTime: ""
      },
      {
        method: "PGD",
        budget1: { mean: "3.20", std: "2.11" },
        budget2: { mean: "6.80", std: "3.28" },
        budget3: { mean: "9.87", std: "4.98" },
        budget4: { mean: "13.20", std: "3.19" },
        budget5: { mean: "14.67", std: "4.51" },
        attackTime: ""
      },
      {
        method: "PR-BCD",
        budget1: { mean: "3.20", std: "1.97" },
        budget2: { mean: "7.47", std: "2.67" },
        budget3: { mean: "10.27", std: "3.53" },
        budget4: { mean: "12.53", std: "5.48" },
        budget5: { mean: "17.87", std: "5.97" },
        attackTime: ""
      },
      {
        method: "SGA",
        budget1: { mean: "4.80", std: "3.00" },
        budget2: { mean: "8.93", std: "6.04" },
        budget3: { mean: "10.67", std: "4.88" },
        budget4: { mean: "15.33", std: "5.64" },
        budget5: { mean: "16.93", std: "4.83" },
        attackTime: ""
      },
      {
        method: "GOttack",
        budget1: { mean: "4.80", std: "2.70" },
        budget2: { mean: "7.87", std: "4.44" },
        budget3: { mean: "10.80", std: "4.71" },
        budget4: { mean: "14.27", std: "5.01" },
        budget5: { mean: "17.20", std: "4.52" },
        attackTime: ""
      }
    ]
  },
  {
    section: "Homophily Results",
    dataset: "PUBMED",
    victim: "GCN",
    setting: "Evasion",
    entries: [
      {
        method: "L1D-RND",
        budget1: { mean: "10.93", std: "3.01" },
        budget2: { mean: "15.47", std: "4.87" },
        budget3: { mean: "17.20", std: "6.58" },
        budget4: { mean: "18.80", std: "5.28" },
        budget5: { mean: "23.60", std: "9.63" },
        attackTime: ""
      },
      {
        method: "FGA",
        budget1: { mean: "35.60", std: "3.14" },
        budget2: { mean: "47.60", std: "5.77" },
        budget3: { mean: "55.33", std: "4.12" },
        budget4: { mean: "58.40", std: "2.29" },
        budget5: { mean: "58.00", std: "3.02" },
        attackTime: ""
      },
      {
        method: "Nettack",
        budget1: { mean: "33.73", std: "3.37" },
        budget2: { mean: "55.73", std: "4.33" },
        budget3: { mean: "57.47", std: "2.20" },
        budget4: { mean: "58.67", std: "2.09" },
        budget5: { mean: "58.67", std: "2.23" },
        attackTime: ""
      },
      {
        method: "PGD",
        budget1: { mean: "34.13", std: "3.66" },
        budget2: { mean: "40.67", std: "3.98" },
        budget3: { mean: "40.93", std: "5.18" },
        budget4: { mean: "44.80", std: "5.75" },
        budget5: { mean: "44.93", std: "6.27" },
        attackTime: ""
      },
      {
        method: "PR-BCD",
        budget1: { mean: "29.60", std: "3.04" },
        budget2: { mean: "36.53", std: "3.25" },
        budget3: { mean: "45.73", std: "3.92" },
        budget4: { mean: "51.47", std: "4.56" },
        budget5: { mean: "54.13", std: "3.25" },
        attackTime: ""
      },
      {
        method: "SGA",
        budget1: { mean: "34.27", std: "4.27" },
        budget2: { mean: "42.13", std: "6.30" },
        budget3: { mean: "51.33", std: "7.08" },
        budget4: { mean: "54.27", std: "6.71" },
        budget5: { mean: "54.80", std: "4.46" },
        attackTime: ""
      },
      {
        method: "GOttack",
        budget1: { mean: "35.87", std: "3.42" },
        budget2: { mean: "48.00", std: "6.46" },
        budget3: { mean: "56.13", std: "3.58" },
        budget4: { mean: "58.13", std: "2.77" },
        budget5: { mean: "59.60", std: "2.16" },
        attackTime: ""
      }
    ]
  },
  {
    section: "Homophily Results",
    dataset: "PUBMED",
    victim: "GCN",
    setting: "Poisoning",
    entries: [
      {
        method: "L1D-RND",
        budget1: { mean: "9.73", std: "3.10" },
        budget2: { mean: "15.47", std: "4.81" },
        budget3: { mean: "17.33", std: "5.64" },
        budget4: { mean: "19.33", std: "5.49" },
        budget5: { mean: "23.20", std: "9.91" },
        attackTime: ""
      },
      {
        method: "FGA",
        budget1: { mean: "35.33", std: "3.09" },
        budget2: { mean: "47.47", std: "4.93" },
        budget3: { mean: "55.33", std: "4.58" },
        budget4: { mean: "58.53", std: "1.77" },
        budget5: { mean: "58.00", std: "2.62" },
        attackTime: ""
      },
      {
        method: "Nettack",
        budget1: { mean: "34.13", std: "4.69" },
        budget2: { mean: "54.80", std: "3.36" },
        budget3: { mean: "57.47", std: "1.92" },
        budget4: { mean: "58.40", std: "2.03" },
        budget5: { mean: "58.40", std: "1.88" },
        attackTime: ""
      },
      {
        method: "PGD",
        budget1: { mean: "33.60", std: "3.48" },
        budget2: { mean: "40.67", std: "4.45" },
        budget3: { mean: "40.93", std: "5.12" },
        budget4: { mean: "45.07", std: "5.50" },
        budget5: { mean: "45.47", std: "6.44" },
        attackTime: ""
      },
      {
        method: "PR-BCD",
        budget1: { mean: "29.60", std: "3.14" },
        budget2: { mean: "36.53", std: "3.07" },
        budget3: { mean: "45.47", std: "3.42" },
        budget4: { mean: "50.13", std: "4.50" },
        budget5: { mean: "54.40", std: "2.85" },
        attackTime: ""
      },
      {
        method: "SGA",
        budget1: { mean: "34.13", std: "4.03" },
        budget2: { mean: "41.60", std: "5.41" },
        budget3: { mean: "50.93", std: "7.48" },
        budget4: { mean: "54.00", std: "6.05" },
        budget5: { mean: "54.40", std: "4.91" },
        attackTime: ""
      },
      {
        method: "GOttack",
        budget1: { mean: "35.60", std: "3.40" },
        budget2: { mean: "47.60", std: "5.51" },
        budget3: { mean: "55.73", std: "4.53" },
        budget4: { mean: "58.13", std: "2.67" },
        budget5: { mean: "59.20", std: "1.97" },
        attackTime: ""
      }
    ]
  },
  {
    section: "Homophily Results",
    dataset: "PUBMED",
    victim: "GNNGuard",
    setting: "Evasion",
    entries: [
      {
        method: "L1D-RND",
        budget1: { mean: "6.53", std: "4.63" },
        budget2: { mean: "8.27", std: "4.20" },
        budget3: { mean: "9.73", std: "4.53" },
        budget4: { mean: "10.13", std: "5.68" },
        budget5: { mean: "12.40", std: "5.46" },
        attackTime: ""
      },
      {
        method: "FGA",
        budget1: { mean: "3.60", std: "1.88" },
        budget2: { mean: "4.67", std: "2.35" },
        budget3: { mean: "7.47", std: "2.97" },
        budget4: { mean: "10.27", std: "2.81" },
        budget5: { mean: "12.40", std: "3.56" },
        attackTime: ""
      },
      {
        method: "Nettack",
        budget1: { mean: "2.93", std: "1.67" },
        budget2: { mean: "7.33", std: "3.75" },
        budget3: { mean: "10.13", std: "3.50" },
        budget4: { mean: "13.73", std: "4.89" },
        budget5: { mean: "15.87", std: "3.89" },
        attackTime: ""
      },
      {
        method: "PGD",
        budget1: { mean: "2.53", std: "1.60" },
        budget2: { mean: "5.47", std: "2.07" },
        budget3: { mean: "6.80", std: "3.28" },
        budget4: { mean: "10.40", std: "2.95" },
        budget5: { mean: "11.33", std: "4.05" },
        attackTime: ""
      },
      {
        method: "PR-BCD",
        budget1: { mean: "4.27", std: "2.25" },
        budget2: { mean: "8.53", std: "3.74" },
        budget3: { mean: "12.40", std: "4.01" },
        budget4: { mean: "15.33", std: "4.19" },
        budget5: { mean: "17.33", std: "3.52" },
        attackTime: ""
      },
      {
        method: "SGA",
        budget1: { mean: "3.47", std: "1.92" },
        budget2: { mean: "6.13", std: "3.07" },
        budget3: { mean: "7.33", std: "2.35" },
        budget4: { mean: "9.87", std: "4.03" },
        budget5: { mean: "11.73", std: "4.27" },
        attackTime: ""
      },
      {
        method: "GOttack",
        budget1: { mean: "3.07", std: "2.25" },
        budget2: { mean: "6.80", std: "3.10" },
        budget3: { mean: "9.20", std: "3.00" },
        budget4: { mean: "11.20", std: "3.00" },
        budget5: { mean: "13.87", std: "3.42" },
        attackTime: ""
      }
    ]
  },
  {
    section: "Homophily Results",
    dataset: "PUBMED",
    victim: "GNNGuard",
    setting: "Poisoning",
    entries: [
      {
        method: "L1D-RND",
        budget1: { mean: "6.53", std: "4.93" },
        budget2: { mean: "8.00", std: "4.21" },
        budget3: { mean: "9.33", std: "3.90" },
        budget4: { mean: "10.40", std: "5.96" },
        budget5: { mean: "12.53", std: "5.48" },
        attackTime: ""
      },
      {
        method: "FGA",
        budget1: { mean: "4.80", std: "3.19" },
        budget2: { mean: "5.73", std: "3.10" },
        budget3: { mean: "8.93", std: "3.01" },
        budget4: { mean: "11.60", std: "2.41" },
        budget5: { mean: "13.20", std: "4.26" },
        attackTime: ""
      },
      {
        method: "Nettack",
        budget1: { mean: "4.40", std: "2.53" },
        budget2: { mean: "8.67", std: "3.75" },
        budget3: { mean: "10.53", std: "4.17" },
        budget4: { mean: "13.87", std: "4.69" },
        budget5: { mean: "15.73", std: "3.69" },
        attackTime: ""
      },
      {
        method: "PGD",
        budget1: { mean: "4.27", std: "2.12" },
        budget2: { mean: "6.53", std: "3.25" },
        budget3: { mean: "7.87", std: "3.16" },
        budget4: { mean: "12.00", std: "3.02" },
        budget5: { mean: "11.87", std: "4.17" },
        attackTime: ""
      },
      {
        method: "PR-BCD",
        budget1: { mean: "5.60", std: "4.08" },
        budget2: { mean: "9.60", std: "4.67" },
        budget3: { mean: "13.33", std: "4.19" },
        budget4: { mean: "16.67", std: "3.75" },
        budget5: { mean: "18.40", std: "3.31" },
        attackTime: ""
      },
      {
        method: "SGA",
        budget1: { mean: "4.93", std: "3.20" },
        budget2: { mean: "8.00", std: "3.85" },
        budget3: { mean: "8.27", std: "2.49" },
        budget4: { mean: "11.33", std: "3.75" },
        budget5: { mean: "12.53", std: "3.81" },
        attackTime: ""
      },
      {
        method: "GOttack",
        budget1: { mean: "4.93", std: "3.10" },
        budget2: { mean: "7.87", std: "3.66" },
        budget3: { mean: "9.87", std: "3.66" },
        budget4: { mean: "12.00", std: "3.21" },
        budget5: { mean: "14.40", std: "3.64" },
        attackTime: ""
      }
    ]
  },
  {
    section: "Heterophily Results",
    dataset: "SQUIRREL",
    victim: "GCN",
    setting: "Evasion",
    entries: [
      {
        method: "L1D-RND",
        budget1: { mean: "24.93", std: "33.09" },
        budget2: { mean: "64.53", std: "6.91" },
        budget3: { mean: "72.80", std: "7.36" },
        budget4: { mean: "71.60", std: "5.67" },
        budget5: { mean: "71.47", std: "4.56" },
        attackTime: ""
      },
      {
        method: "FGA",
        budget1: { mean: "62.40", std: "14.64" },
        budget2: { mean: "65.87", std: "15.45" },
        budget3: { mean: "71.07", std: "7.40" },
        budget4: { mean: "71.07", std: "5.80" },
        budget5: { mean: "71.60", std: "4.36" },
        attackTime: ""
      },
      {
        method: "Nettack",
        budget1: { mean: "1.87", std: "3.34" },
        budget2: { mean: "1.47", std: "2.77" },
        budget3: { mean: "1.33", std: "1.63" },
        budget4: { mean: "1.60", std: "2.29" },
        budget5: { mean: "2.13", std: "2.20" },
        attackTime: ""
      },
      {
        method: "PGD",
        budget1: { mean: "47.73", std: "10.25" },
        budget2: { mean: "58.93", std: "12.28" },
        budget3: { mean: "65.87", std: "10.04" },
        budget4: { mean: "62.80", std: "11.73" },
        budget5: { mean: "64.80", std: "13.54" },
        attackTime: ""
      },
      {
        method: "PR-BCD",
        budget1: { mean: "69.87", std: "10.76" },
        budget2: { mean: "69.73", std: "6.41" },
        budget3: { mean: "69.60", std: "6.56" },
        budget4: { mean: "71.87", std: "4.63" },
        budget5: { mean: "73.07", std: "5.12" },
        attackTime: ""
      },
      {
        method: "SGA",
        budget1: { mean: "52.00", std: "6.19" },
        budget2: { mean: "59.20", std: "4.46" },
        budget3: { mean: "60.53", std: "8.83" },
        budget4: { mean: "65.07", std: "8.24" },
        budget5: { mean: "66.80", std: "7.04" },
        attackTime: ""
      },
      {
        method: "GOttack",
        budget1: { mean: "13.33", std: "4.64" },
        budget2: { mean: "10.93", std: "5.55" },
        budget3: { mean: "14.00", std: "6.05" },
        budget4: { mean: "11.20", std: "5.85" },
        budget5: { mean: "13.60", std: "5.46" },
        attackTime: ""
      }
    ]
  },
  {
    section: "Heterophily Results",
    dataset: "SQUIRREL",
    victim: "GCN",
    setting: "Poisoning",
    entries: [
      {
        method: "L1D-RND",
        budget1: { mean: "34.67", std: "27.36" },
        budget2: { mean: "66.80", std: "7.00" },
        budget3: { mean: "73.87", std: "7.11" },
        budget4: { mean: "71.47", std: "5.68" },
        budget5: { mean: "71.47", std: "4.56" },
        attackTime: ""
      },
      {
        method: "FGA",
        budget1: { mean: "63.87", std: "12.25" },
        budget2: { mean: "67.20", std: "12.85" },
        budget3: { mean: "71.73", std: "6.23" },
        budget4: { mean: "71.47", std: "6.02" },
        budget5: { mean: "72.40", std: "4.01" },
        attackTime: ""
      },
      {
        method: "Nettack",
        budget1: { mean: "2.80", std: "2.24" },
        budget2: { mean: "1.87", std: "2.88" },
        budget3: { mean: "2.00", std: "2.14" },
        budget4: { mean: "2.00", std: "2.51" },
        budget5: { mean: "2.27", std: "2.37" },
        attackTime: ""
      },
      {
        method: "PGD",
        budget1: { mean: "52.27", std: "8.21" },
        budget2: { mean: "62.00", std: "10.25" },
        budget3: { mean: "68.00", std: "7.82" },
        budget4: { mean: "64.80", std: "9.85" },
        budget5: { mean: "65.73", std: "12.21" },
        attackTime: ""
      },
      {
        method: "PR-BCD",
        budget1: { mean: "70.27", std: "11.16" },
        budget2: { mean: "70.67", std: "6.75" },
        budget3: { mean: "70.67", std: "5.89" },
        budget4: { mean: "72.67", std: "4.05" },
        budget5: { mean: "74.27", std: "4.77" },
        attackTime: ""
      },
      {
        method: "SGA",
        budget1: { mean: "53.47", std: "5.97" },
        budget2: { mean: "59.87", std: "4.98" },
        budget3: { mean: "61.87", std: "8.53" },
        budget4: { mean: "64.80", std: "8.55" },
        budget5: { mean: "66.40", std: "7.14" },
        attackTime: ""
      },
      {
        method: "GOttack",
        budget1: { mean: "13.60", std: "3.79" },
        budget2: { mean: "12.13", std: "5.48" },
        budget3: { mean: "13.47", std: "5.78" },
        budget4: { mean: "12.00", std: "5.50" },
        budget5: { mean: "13.60", std: "4.91" },
        attackTime: ""
      }
    ]
  },
  {
    section: "Heterophily Results",
    dataset: "CHAMELEON",
    victim: "GCN",
    setting: "Evasion",
    entries: [
      {
        method: "L1D-RND",
        budget1: { mean: "21.87", std: "28.89" },
        budget2: { mean: "50.93", std: "9.71" },
        budget3: { mean: "62.00", std: "6.05" },
        budget4: { mean: "66.67", std: "7.12" },
        budget5: { mean: "66.53", std: "7.07" },
        attackTime: ""
      },
      {
        method: "FGA",
        budget1: { mean: "62.40", std: "7.72" },
        budget2: { mean: "58.00", std: "12.72" },
        budget3: { mean: "59.87", std: "15.97" },
        budget4: { mean: "56.40", std: "12.54" },
        budget5: { mean: "61.07", std: "12.30" },
        attackTime: ""
      },
      {
        method: "Nettack",
        budget1: { mean: "3.07", std: "2.60" },
        budget2: { mean: "5.47", std: "3.96" },
        budget3: { mean: "4.93", std: "4.33" },
        budget4: { mean: "6.27", std: "4.20" },
        budget5: { mean: "6.27", std: "4.83" },
        attackTime: ""
      },
      {
        method: "PGD",
        budget1: { mean: "44.00", std: "20.95" },
        budget2: { mean: "50.53", std: "18.10" },
        budget3: { mean: "61.07", std: "14.64" },
        budget4: { mean: "57.73", std: "15.47" },
        budget5: { mean: "59.47", std: "14.05" },
        attackTime: ""
      },
      {
        method: "PR-BCD",
        budget1: { mean: "58.00", std: "18.53" },
        budget2: { mean: "67.87", std: "20.46" },
        budget3: { mean: "70.27", std: "8.88" },
        budget4: { mean: "67.07", std: "10.66" },
        budget5: { mean: "73.47", std: "8.77" },
        attackTime: ""
      },
      {
        method: "SGA",
        budget1: { mean: "45.47", std: "10.38" },
        budget2: { mean: "49.07", std: "9.82" },
        budget3: { mean: "55.60", std: "7.64" },
        budget4: { mean: "57.33", std: "9.37" },
        budget5: { mean: "55.33", std: "6.70" },
        attackTime: ""
      },
      {
        method: "GOttack",
        budget1: { mean: "23.47", std: "8.16" },
        budget2: { mean: "19.20", std: "5.75" },
        budget3: { mean: "22.53", std: "7.27" },
        budget4: { mean: "17.33", std: "6.62" },
        budget5: { mean: "22.80", std: "9.13" },
        attackTime: ""
      }
    ]
  },
  {
    section: "Heterophily Results",
    dataset: "CHAMELEON",
    victim: "GCN",
    setting: "Poisoning",
    entries: [
      {
        method: "L1D-RND",
        budget1: { mean: "35.60", std: "22.31" },
        budget2: { mean: "56.27", std: "9.85" },
        budget3: { mean: "65.20", std: "5.89" },
        budget4: { mean: "69.07", std: "7.44" },
        budget5: { mean: "68.13", std: "5.88" },
        attackTime: ""
      },
      {
        method: "FGA",
        budget1: { mean: "66.40", std: "8.25" },
        budget2: { mean: "61.47", std: "12.70" },
        budget3: { mean: "62.13", std: "13.70" },
        budget4: { mean: "60.53", std: "11.75" },
        budget5: { mean: "63.07", std: "10.69" },
        attackTime: ""
      },
      {
        method: "Nettack",
        budget1: { mean: "7.87", std: "4.98" },
        budget2: { mean: "8.13", std: "2.56" },
        budget3: { mean: "7.33", std: "5.49" },
        budget4: { mean: "7.73", std: "3.77" },
        budget5: { mean: "8.40", std: "5.72" },
        attackTime: ""
      },
      {
        method: "PGD",
        budget1: { mean: "53.47", std: "17.98" },
        budget2: { mean: "56.80", std: "15.83" },
        budget3: { mean: "64.13", std: "12.64" },
        budget4: { mean: "61.87", std: "14.67" },
        budget5: { mean: "60.53", std: "14.23" },
        attackTime: ""
      },
      {
        method: "PR-BCD",
        budget1: { mean: "64.80", std: "14.69" },
        budget2: { mean: "70.80", std: "14.89" },
        budget3: { mean: "70.67", std: "8.54" },
        budget4: { mean: "67.60", std: "7.57" },
        budget5: { mean: "74.93", std: "6.63" },
        attackTime: ""
      },
      {
        method: "SGA",
        budget1: { mean: "51.47", std: "9.12" },
        budget2: { mean: "54.67", std: "8.57" },
        budget3: { mean: "60.13", std: "7.65" },
        budget4: { mean: "61.87", std: "9.49" },
        budget5: { mean: "59.07", std: "7.74" },
        attackTime: ""
      },
      {
        method: "GOttack",
        budget1: { mean: "27.07", std: "8.48" },
        budget2: { mean: "23.73", std: "5.65" },
        budget3: { mean: "23.33", std: "7.16" },
        budget4: { mean: "24.80", std: "7.04" },
        budget5: { mean: "24.67", std: "7.81" },
        attackTime: ""
      }
    ]
  },
  {
    section: "Heterophily Results",
    dataset: "SQUIRREL",
    victim: "RUNG",
    setting: "Evasion",
    entries: [
      {
        method: "L1D-RND",
        budget1: { mean: "2.13", std: "1.77" },
        budget2: { mean: "2.13", std: "2.77" },
        budget3: { mean: "2.13", std: "2.20" },
        budget4: { mean: "2.67", std: "2.58" },
        budget5: { mean: "2.80", std: "2.48" },
        attackTime: ""
      },
      {
        method: "FGA",
        budget1: { mean: "1.87", std: "2.88" },
        budget2: { mean: "1.87", std: "2.20" },
        budget3: { mean: "3.20", std: "3.36" },
        budget4: { mean: "2.93", std: "2.25" },
        budget5: { mean: "3.60", std: "2.53" },
        attackTime: ""
      },
      {
        method: "Nettack",
        budget1: { mean: "0.27", std: "1.03" },
        budget2: { mean: "0.80", std: "1.47" },
        budget3: { mean: "1.33", std: "1.63" },
        budget4: { mean: "1.47", std: "1.77" },
        budget5: { mean: "1.60", std: "1.72" },
        attackTime: ""
      },
      {
        method: "PGD",
        budget1: { mean: "2.00", std: "1.85" },
        budget2: { mean: "2.67", std: "2.89" },
        budget3: { mean: "4.40", std: "2.85" },
        budget4: { mean: "4.67", std: "2.99" },
        budget5: { mean: "4.93", std: "3.10" },
        attackTime: ""
      },
      {
        method: "PR-BCD",
        budget1: { mean: "1.73", std: "2.49" },
        budget2: { mean: "2.67", std: "2.47" },
        budget3: { mean: "3.20", std: "2.60" },
        budget4: { mean: "2.27", std: "2.12" },
        budget5: { mean: "3.33", std: "3.09" },
        attackTime: ""
      },
      {
        method: "SGA",
        budget1: { mean: "2.67", std: "3.68" },
        budget2: { mean: "3.47", std: "4.17" },
        budget3: { mean: "5.07", std: "4.77" },
        budget4: { mean: "5.07", std: "4.59" },
        budget5: { mean: "5.60", std: "4.15" },
        attackTime: ""
      },
      {
        method: "GOttack",
        budget1: { mean: "0.93", std: "2.25" },
        budget2: { mean: "0.93", std: "1.83" },
        budget3: { mean: "1.73", std: "2.71" },
        budget4: { mean: "1.47", std: "2.07" },
        budget5: { mean: "2.00", std: "2.83" },
        attackTime: ""
      }
    ]
  },
  {
    section: "Heterophily Results",
    dataset: "SQUIRREL",
    victim: "RUNG",
    setting: "Poisoning",
    entries: [
      {
        method: "L1D-RND",
        budget1: { mean: "11.33", std: "8.64" },
        budget2: { mean: "16.13", std: "8.26" },
        budget3: { mean: "17.07", std: "8.94" },
        budget4: { mean: "18.67", std: "8.02" },
        budget5: { mean: "19.33", std: "8.09" },
        attackTime: ""
      },
      {
        method: "FGA",
        budget1: { mean: "20.53", std: "9.69" },
        budget2: { mean: "24.67", std: "10.27" },
        budget3: { mean: "29.47", std: "7.23" },
        budget4: { mean: "28.53", std: "9.21" },
        budget5: { mean: "28.67", std: "10.63" },
        attackTime: ""
      },
      {
        method: "Nettack",
        budget1: { mean: "6.53", std: "4.44" },
        budget2: { mean: "6.93", std: "5.18" },
        budget3: { mean: "6.53", std: "4.81" },
        budget4: { mean: "6.93", std: "4.83" },
        budget5: { mean: "6.80", std: "4.26" },
        attackTime: ""
      },
      {
        method: "PGD",
        budget1: { mean: "17.33", std: "7.81" },
        budget2: { mean: "23.20", std: "9.91" },
        budget3: { mean: "26.40", std: "9.05" },
        budget4: { mean: "27.07", std: "6.23" },
        budget5: { mean: "27.87", std: "8.63" },
        attackTime: ""
      },
      {
        method: "PR-BCD",
        budget1: { mean: "15.07", std: "6.18" },
        budget2: { mean: "19.47", std: "7.31" },
        budget3: { mean: "19.20", std: "6.84" },
        budget4: { mean: "20.67", std: "7.73" },
        budget5: { mean: "20.53", std: "6.99" },
        attackTime: ""
      },
      {
        method: "SGA",
        budget1: { mean: "18.40", std: "9.33" },
        budget2: { mean: "22.27", std: "8.78" },
        budget3: { mean: "26.27", std: "8.61" },
        budget4: { mean: "26.93", std: "10.63" },
        budget5: { mean: "27.73", std: "10.11" },
        attackTime: ""
      },
      {
        method: "GOttack",
        budget1: { mean: "6.27", std: "5.18" },
        budget2: { mean: "6.93", std: "6.23" },
        budget3: { mean: "8.00", std: "5.66" },
        budget4: { mean: "7.60", std: "5.62" },
        budget5: { mean: "9.20", std: "6.58" },
        attackTime: ""
      }
    ]
  },
  {
    section: "Heterophily Results",
    dataset: "CHAMELEON",
    victim: "RUNG",
    setting: "Evasion",
    entries: [
      {
        method: "L1D-RND",
        budget1: { mean: "2.27", std: "3.28" },
        budget2: { mean: "2.27", std: "5.18" },
        budget3: { mean: "3.47", std: "6.61" },
        budget4: { mean: "4.53", std: "6.65" },
        budget5: { mean: "5.07", std: "7.17" },
        attackTime: ""
      },
      {
        method: "FGA",
        budget1: { mean: "0.93", std: "1.83" },
        budget2: { mean: "2.27", std: "3.69" },
        budget3: { mean: "2.53", std: "3.58" },
        budget4: { mean: "3.33", std: "5.22" },
        budget5: { mean: "4.13", std: "5.37" },
        attackTime: ""
      },
      {
        method: "Nettack",
        budget1: { mean: "0.27", std: "0.70" },
        budget2: { mean: "0.67", std: "1.23" },
        budget3: { mean: "0.53", std: "1.19" },
        budget4: { mean: "0.93", std: "1.83" },
        budget5: { mean: "1.33", std: "2.23" },
        attackTime: ""
      },
      {
        method: "PGD",
        budget1: { mean: "1.87", std: "4.69" },
        budget2: { mean: "2.00", std: "3.02" },
        budget3: { mean: "1.60", std: "2.03" },
        budget4: { mean: "3.20", std: "4.71" },
        budget5: { mean: "3.47", std: "5.93" },
        attackTime: ""
      },
      {
        method: "PR-BCD",
        budget1: { mean: "0.80", std: "2.24" },
        budget2: { mean: "1.87", std: "3.58" },
        budget3: { mean: "1.87", std: "3.96" },
        budget4: { mean: "2.40", std: "3.87" },
        budget5: { mean: "3.20", std: "5.65" },
        attackTime: ""
      },
      {
        method: "SGA",
        budget1: { mean: "2.13", std: "4.31" },
        budget2: { mean: "2.93", std: "4.95" },
        budget3: { mean: "3.20", std: "3.61" },
        budget4: { mean: "5.60", std: "7.38" },
        budget5: { mean: "4.40", std: "6.47" },
        attackTime: ""
      },
      {
        method: "GOttack",
        budget1: { mean: "0.67", std: "1.23" },
        budget2: { mean: "1.33", std: "2.09" },
        budget3: { mean: "1.60", std: "2.16" },
        budget4: { mean: "1.87", std: "3.25" },
        budget5: { mean: "3.47", std: "5.04" },
        attackTime: ""
      }
    ]
  },
  {
    section: "Heterophily Results",
    dataset: "CHAMELEON",
    victim: "RUNG",
    setting: "Poisoning",
    entries: [
      {
        method: "L1D-RND",
        budget1: { mean: "12.00", std: "8.88" },
        budget2: { mean: "21.33", std: "12.30" },
        budget3: { mean: "24.00", std: "10.61" },
        budget4: { mean: "28.00", std: "13.96" },
        budget5: { mean: "32.40", std: "14.35" },
        attackTime: ""
      },
      {
        method: "FGA",
        budget1: { mean: "16.40", std: "7.53" },
        budget2: { mean: "17.47", std: "12.06" },
        budget3: { mean: "17.20", std: "7.70" },
        budget4: { mean: "18.80", std: "10.77" },
        budget5: { mean: "19.20", std: "11.18" },
        attackTime: ""
      },
      {
        method: "Nettack",
        budget1: { mean: "7.33", std: "2.89" },
        budget2: { mean: "6.67", std: "2.89" },
        budget3: { mean: "7.07", std: "3.61" },
        budget4: { mean: "6.93", std: "4.06" },
        budget5: { mean: "7.47", std: "3.34" },
        attackTime: ""
      },
      {
        method: "PGD",
        budget1: { mean: "13.73", std: "6.41" },
        budget2: { mean: "18.40", std: "7.64" },
        budget3: { mean: "19.20", std: "8.94" },
        budget4: { mean: "20.00", std: "9.80" },
        budget5: { mean: "19.60", std: "11.76" },
        attackTime: ""
      },
      {
        method: "PR-BCD",
        budget1: { mean: "11.73", std: "5.90" },
        budget2: { mean: "14.40", std: "6.15" },
        budget3: { mean: "13.87", std: "7.87" },
        budget4: { mean: "14.53", std: "5.42" },
        budget5: { mean: "15.73", std: "6.45" },
        attackTime: ""
      },
      {
        method: "SGA",
        budget1: { mean: "14.27", std: "6.76" },
        budget2: { mean: "15.07", std: "5.23" },
        budget3: { mean: "20.40", std: "7.41" },
        budget4: { mean: "19.60", std: "7.97" },
        budget5: { mean: "18.00", std: "6.46" },
        attackTime: ""
      },
      {
        method: "GOttack",
        budget1: { mean: "10.80", std: "4.89" },
        budget2: { mean: "8.27", std: "5.80" },
        budget3: { mean: "9.20", std: "3.69" },
        budget4: { mean: "10.53", std: "3.42" },
        budget5: { mean: "12.53", std: "6.35" },
        attackTime: ""
      }
    ]
  },
  {
    section: "Large-Scale Results",
    dataset: "OGB-ARXIV",
    victim: "GCN",
    setting: "Evasion",
    entries: [
      {
        method: "L1D-RND",
        budget1: { mean: "16.00", std: "2.00" },
        budget2: { mean: "30.67", std: "7.02" },
        budget3: { mean: "36.00", std: "2.00" },
        budget4: { mean: "38.00", std: "2.00" },
        budget5: { mean: "36.67", std: "3.06" },
        attackTime: ""
      },
      {
        method: "PR-BCD",
        budget1: { mean: "23.33", std: "3.06" },
        budget2: { mean: "34.00", std: "3.46" },
        budget3: { mean: "38.00", std: "2.00" },
        budget4: { mean: "40.67", std: "3.06" },
        budget5: { mean: "39.33", std: "1.15" },
        attackTime: ""
      },
      {
        method: "SGA",
        budget1: { mean: "36.67", std: "5.03" },
        budget2: { mean: "48.67", std: "7.02" },
        budget3: { mean: "56.00", std: "2.00" },
        budget4: { mean: "57.33", std: "1.15" },
        budget5: { mean: "58.67", std: "1.15" },
        attackTime: ""
      }
    ]
  },
  {
    section: "Large-Scale Results",
    dataset: "OGB-ARXIV",
    victim: "GCN",
    setting: "Poisoning",
    entries: [
      {
        method: "L1D-RND",
        budget1: { mean: "17.33", std: "4.16" },
        budget2: { mean: "32.00", std: "6.00" },
        budget3: { mean: "38.00", std: "2.00" },
        budget4: { mean: "39.33", std: "1.15" },
        budget5: { mean: "38.67", std: "2.31" },
        attackTime: ""
      },
      {
        method: "PR-BCD",
        budget1: { mean: "22.00", std: "5.29" },
        budget2: { mean: "34.67", std: "3.06" },
        budget3: { mean: "36.67", std: "1.15" },
        budget4: { mean: "40.67", std: "5.03" },
        budget5: { mean: "39.33", std: "1.15" },
        attackTime: ""
      },
      {
        method: "SGA",
        budget1: { mean: "36.67", std: "2.31" },
        budget2: { mean: "48.67", std: "8.08" },
        budget3: { mean: "56.00", std: "2.00" },
        budget4: { mean: "57.33", std: "1.15" },
        budget5: { mean: "58.67", std: "1.15" },
        attackTime: ""
      }
    ]
  },
  {
    section: "Large-Scale Results",
    dataset: "OGB-ARXIV",
    victim: "GSAGE",
    setting: "Evasion",
    entries: [
      {
        method: "L1D-RND",
        budget1: { mean: "16.67", std: "8.08" },
        budget2: { mean: "27.33", std: "7.02" },
        budget3: { mean: "33.33", std: "7.57" },
        budget4: { mean: "29.33", std: "9.45" },
        budget5: { mean: "34.67", std: "7.02" },
        attackTime: ""
      },
      {
        method: "PR-BCD",
        budget1: { mean: "20.67", std: "1.15" },
        budget2: { mean: "24.67", std: "1.15" },
        budget3: { mean: "22.00", std: "3.46" },
        budget4: { mean: "24.67", std: "3.06" },
        budget5: { mean: "28.00", std: "2.00" },
        attackTime: ""
      },
      {
        method: "SGA",
        budget1: { mean: "40.67", std: "2.31" },
        budget2: { mean: "56.00", std: "10.00" },
        budget3: { mean: "63.33", std: "4.16" },
        budget4: { mean: "72.00", std: "7.21" },
        budget5: { mean: "71.33", std: "5.77" },
        attackTime: ""
      }
    ]
  },
  {
    section: "Large-Scale Results",
    dataset: "OGB-ARXIV",
    victim: "GSAGE",
    setting: "Poisoning",
    entries: [
      {
        method: "L1D-RND",
        budget1: { mean: "17.33", std: "5.03" },
        budget2: { mean: "26.00", std: "3.46" },
        budget3: { mean: "30.00", std: "14.00" },
        budget4: { mean: "31.33", std: "6.43" },
        budget5: { mean: "34.67", std: "7.02" },
        attackTime: ""
      },
      {
        method: "PR-BCD",
        budget1: { mean: "17.33", std: "3.06" },
        budget2: { mean: "24.00", std: "2.00" },
        budget3: { mean: "19.33", std: "3.06" },
        budget4: { mean: "26.00", std: "2.00" },
        budget5: { mean: "26.00", std: "2.00" },
        attackTime: ""
      },
      {
        method: "SGA",
        budget1: { mean: "40.00", std: "3.46" },
        budget2: { mean: "60.00", std: "8.00" },
        budget3: { mean: "61.33", std: "5.77" },
        budget4: { mean: "70.67", std: "5.03" },
        budget5: { mean: "74.67", std: "8.08" },
        attackTime: ""
      }
    ]
  }
];
