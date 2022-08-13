import Auftrag from "./Auftrag";
import Kalkulation from "./Kalkulation";
import React from "react";
import styles from './AuftragsListe.module.css'


export default function AuftragsListe() {
    return (
            <div className="flex justify-between">

                {/*Titel von Säule und Auftragsliste*/}
                <div className="block">
                    <h1 className="text-2xl font-semibold text-indigo-600 pb-2">Kalkulation</h1>
                    <div className="bg-white shadow-lg px-1 py-4 sm:px-2 sm:rounded-md w-7/8 text-xs">
                        <div className={styles.columnTest}>
                        <Kalkulation />
                        </div>
                    </div>
                </div>

                {/*Titel von Säule und Auftragsliste*/}
                <div className="block">
                    <h1 className="text-2xl font-semibold text-indigo-600 pb-2">Auftrag</h1>
                    <div className="bg-white shadow-lg px-1 py-4 sm:px-2 sm:rounded-md w-7/8 text-xs">
                        <div className={styles.columnTest}>
                            <Auftrag />
                        </div>
                    </div>
                </div>

                {/*Titel von Säule und Auftragsliste*/}
                <div className="block">
                    <h1 className="text-2xl font-semibold text-indigo-600 pb-2">Bestätigung</h1>
                    <div className="bg-white shadow-lg px-1 py-4 sm:px-2 sm:rounded-md w-7/8 text-xs">
                        <div className={styles.columnTest}>
                            <Auftrag />
                        </div>
                    </div>
                </div>

                {/*Titel von Säule und Auftragsliste*/}
                <div className="block">
                    <h1 className="text-2xl font-semibold text-indigo-600 pb-2">Produktion</h1>
                    <div className="bg-white shadow-lg px-1 py-4 sm:px-2 sm:rounded-md w-7/8 text-xs">
                        <div className={styles.columnTest}>
                            <Auftrag />
                        </div>
                    </div>
                </div>

                {/*Titel von Säule und Auftragsliste*/}
                <div className="block">
                    <h1 className="text-2xl font-semibold text-indigo-600 pb-2">Abschluss</h1>
                    <div className="bg-white shadow-lg px-1 py-4 sm:px-2 sm:rounded-md w-7/8 text-xs">
                        <div className={styles.columnTest}>
                            <Auftrag />
                        </div>
                    </div>
                </div>

            </div>
    )
}